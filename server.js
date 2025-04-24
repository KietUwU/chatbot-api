import { GoogleGenAI } from "@google/genai";
import { Type } from '@google/genai';
import express, { json } from "express";
import axios from "axios";
import basicAuth from "express-basic-auth";
import url from "url";
import { Agent } from 'node:https';
import { buildCardForConfirmation, buildCardForPOList } from './utils/adaptiveCardBuilder.js';
const oAppApi = new express();
const oAiModel = new GoogleGenAI({ apiKey: "AIzaSyC6c9jwDAj6_tSythcRJ64dZ_CSat8JkQs" });
const iPort = 3000;

//to get data from VCAP_SERVICES:: Applications running in Cloud Foundry gain access 
//to the bound service instances via credentials stored in an environment variable called VCAP_SERVICES.
/* const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
const destSrvCred = VCAP_SERVICES.destination[0].credentials;
const conSrvCred = VCAP_SERVICES.connectivity[0].credentials; */

// Data File
const sDataFilePath = 'data.json';

oAppApi.use(
    basicAuth({
        users: {
            'admin': 'supersecret',
            'testUser': 'Megavnn123@@'
        }
    }),
    express.json());

oAppApi.listen(iPort, (oError) => {
    console.log(`Gemini API is running on port ${iPort}`);

    if (oError) {
        console.log("Error : ", oError);
    };
});

oAppApi.get("/get", (req, res) => {
    res.send("<p>Welcome to Gemini API Gateway</p><p>Service is Up & Running </p><p></p>" + Date());
    const poList = [
        { number: 123, amount: "$500", owner: "John Doe" },
        { number: 124, amount: "$300", owner: "Jane Smith" }
    ];

    const adaptiveCard = buildCardForPOList(poList);
    res.json(adaptiveCard);
});

oAppApi.post("/callGemini", async (req, res) => {
    console.log('Req Body Type : ', typeof (req.body.contents.parts.text));
    console.log('Gemini API Req Body : ', req.body.contents.parts.text);

    const oResult = await _callAI(req.body.contents.parts.text);
    if (oResult.functionCalls) {
        console.log(oResult);
        console.log(oResult.functionCalls);
        //res.send(oResult);
        const oToolCall = oResult.functionCalls[0];

        if (oToolCall.name === 'get_purchase_order') {
            try {
                const oQueryResult = await _poDetails(oToolCall.args.query_object, oToolCall.args.limit);
                console.log("oQueryResult:", oQueryResult);

                // Ensure poList is an array
                const poList = oQueryResult.value || []; // Adjust based on the actual API response structure

                if (!Array.isArray(poList)) {
                    console.error("Invalid poList format:", poList);
                    res.json({ error: "Invalid data format from API" });
                    return;
                }

                const adaptiveCard = buildCardForPOList(poList); // Generate the adaptive card
                res.json(adaptiveCard); // Send the adaptive card as the response
            } catch (oError) {
                console.log("oError:", oError);
                res.json({ "d": { "error": "error" } });
            }
        };
        if (oToolCall.name === 'approve_purchase_order') {
            try {
                const oApproveResult = await _approvePO('PurchaseOrder', oToolCall.args.purchase_order_number);
                console.log("oApproveResult:", oApproveResult);

                const poItem = oApproveResult.value || {}; // Adjust based on the actual API response structure
                if (!poItem) {
                    console.error("Invalid poItem format:", poItem);
                    res.json({ error: "Invalid data format from API" });
                    return;
                }
                const adaptiveCard = buildCardForConfirmation(poItem.po_number||'','approve'); // Generate the adaptive card
                res.json(adaptiveCard); // Send the adaptive card as the response
            } catch (oError) {
                console.log("oError:", oError);
                res.json({ "d": { "error": "error" } });
            }
        }
        if (oToolCall.name === 'reject_purchase_order') {
            try {
                const oRejectResult = await _rejectPO('PurchaseOrder', oToolCall.args.purchase_order_number);
                console.log("oRejectResult:", oRejectResult);

                const poItem = oRejectResult.value || {}; // Adjust based on the actual API response structure
                if (!poItem) {
                    console.error("Invalid poItem format:", poItem);
                    res.json({ error: "Invalid data format from API" });
                    return;
                }
                const adaptiveCard = buildCardForConfirmation(poItem.po_number||'','reject'); // Generate the adaptive card
                res.json(adaptiveCard); // Send the adaptive card as the response
            } catch (oError) {
                console.log("oError:", oError);
                res.json({ "d": { "error": "error" } });
            }
        }
    } else {
        console.log(oResult);
        console.log("Gemini cannot process this request. Please try again.");
    };

});

oAppApi.get("/podetails", async (req, res) => {
    /* const sDestToken = await _fetchJwtToken(destSrvCred.url, destSrvCred.clientid, destSrvCred.clientsecret);
    const oDestiConfig = await _readDestinationConfig("purchase-order-api", destSrvCred.uri, sDestToken); */
    const sServiceUrl = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001";
    const sServiceObj = "PurchaseOrder";
    const iLimit = 5;
    // queryParam = url.parse(req.url, true).query;

    try {
        const oResult = await _poDetails(sServiceObj, iLimit);
        res.json(oResult);
    } catch (oError) {
        console.log("oError : ", oError)
        res.json({ "d": { "error": "error" } })
    };
});

const _fetchJwtToken = async (sOAuthUrl, sOAuthClient, sOAuthSecret) => {
    return new Promise((resolve, reject) => {
        const sTokenUrl = sOAuthUrl + '/oauth/token?grant_type=client_credentials&response_type=token';
        const oConfig = {
            headers: {
                Authorization: "Basic " + Buffer.from(sOAuthClient + ':' + sOAuthSecret).toString("base64")
            }
        };
        const oInstance = axios.create({
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        });

        oInstance.get(sTokenUrl, oConfig)
            .then(oResponse => {
                resolve(oResponse.data.access_token);
            })
            .catch(oError => {
                reject(oError);
            })
    });
};

const _readDestinationConfig = async (sDestinationName, sDestUri, sJwtToken) => {
    return new Promise((resolve, reject) => {
        //prepare URL
        const sDestSrvUrl = sDestUri + '/destination-configuration/v1/destinations/' + sDestinationName;
        // preparation for the call
        const oConfig = {
            headers: {
                Authorization: 'Bearer ' + sJwtToken
            }
        };

        //backend get call to fetch destination config
        axios.get(sDestSrvUrl, oConfig)
            .then(response => {
                resolve(response.data.destinationConfiguration)
            })
            .catch(error => {
                reject(error)
            })
    });
};

const _poDetails = async (sServiceObj, iLimit) => {
    return new Promise((resolve, reject) => {
        const sServiceUrl = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001";
        const sTargetUrl = `${sServiceUrl}/${sServiceObj}?$top=${iLimit}`;
        //Buffer.from(oDestiConfi.User + ':' + oDestiConfi.Password).toString("base64");
        const oConfig = {
            headers: {
                "APIKey": "CuZbkJRtlUMBAtEKZIkrg0DC1EGPjDgh"
            }
        };

        const oInstance = axios.create({
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        });

        console.log('sTargetUrl : ', sTargetUrl);

        oInstance.get(sTargetUrl, oConfig)
            .then(oResponse => {
                resolve(oResponse.data)
            })
            .catch(oError => {
                reject(oError);
            })
            ;
    });
};

const _approvePO = async (sServiceObj, sPurchaseOrderNumber) => {
    return new Promise((resolve, reject) => {
        const sServiceUrl = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001";
        const sTargetUrl = `${sServiceUrl}/${sServiceObj}('${sPurchaseOrderNumber}')/approve`;
        const oConfig = {
            headers: {
                "APIKey": "CuZbkJRtlUMBAtEKZIkrg0DC1EGPjDgh"
            }
        };

        const oInstance = axios.create({
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        });

        console.log('sTargetUrl : ', sTargetUrl);

        oInstance.post(sTargetUrl, oConfig)
            .then(oResponse => {
                resolve(oResponse.data)
            })
            .catch(oError => {
                reject(oError);
            })
            ;
    });
}

const _rejectPO = async (sServiceObj, sPurchaseOrderNumber) => {
    return new Promise((resolve, reject) => {
        const sServiceUrl = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001";
        const sTargetUrl = `${sServiceUrl}/${sServiceObj}('${sPurchaseOrderNumber}')/reject`;
        const oConfig = {
            headers: {
                "APIKey": "CuZbkJRtlUMBAtEKZIkrg0DC1EGPjDgh"
            }
        };

        const oInstance = axios.create({
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        });

        console.log('sTargetUrl : ', sTargetUrl);

        oInstance.post(sTargetUrl, oConfig)
            .then(oResponse => {
                resolve(oResponse.data)
            })
            .catch(oError => {
                reject(oError);
            })
            ;
    });
}

const _callAI = async (sPrompt) => {
    const oGetPoFromPrompt = {
        name: 'get_purchase_order',
        description: 'Get the data from SAP server.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                query_object: {
                    type: Type.STRING,
                    enum: ['PurchaseOrder', 'PurchaseOrderItem'],
                    description: 'Types of information that can be selected, which can be `PurchaseOrder` or `PurchaseOrderItem`.',
                },
                limit: {
                    type: Type.NUMBER,
                    description: 'The number of rows that can be selected, which can range from 5 to 100.',
                }
            },
            required: ['query_object', 'limit'],
        },
    };
    const oGetPODetails = {
        name: 'get_purchase_order_details',
        description: 'Get the details of Purchase Order.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                purchase_order_number: {
                    type: Type.STRING,
                    description: 'The purchase order number to be fetched.',
                },
                limit: {
                    type: Type.NUMBER,
                    description: 'The number of rows that can be selected, which can range from 5 to 100.',
                }
            },
            required: ['purchase_order_number', 'limit'],
        },
    };
    const oApprovePO = {
        name: 'approve_purchase_order',
        description: 'Approve the purchase order.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                purchase_order_number: {
                    type: Type.STRING,
                    description: 'The purchase order number to be approved.',
                }
            },
            required: ['purchase_order_number'],
        },
    };
    const oRejectPO = {
        name: 'reject_purchase_order',
        description: 'Reject the purchase order.',
        parameters: {
            type: Type.OBJECT,
            properties: {
                purchase_order_number: {
                    type: Type.STRING,
                    description: 'The purchase order number to be rejected.',
                }
            },
            required: ['purchase_order_number'],
        },
    };
    const oConfig = {
        tools: [{
            functionDeclarations: [oGetPoFromPrompt, oGetPODetails, oApprovePO, oRejectPO],
        }]
    };
    const oContents = [{
        "parts": [{ "text": sPrompt }]
    }];

    console.log("Prompt Contents : ", sPrompt);

    const response = await oAiModel.models.generateContent({
        model: "gemini-2.0-flash",
        contents: oContents,
        config: oConfig
    });
    return response;
};