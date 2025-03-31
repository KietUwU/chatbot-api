import { GoogleGenAI } from "@google/genai";
import express, { response } from "express";
import axios from "axios";
import basicAuth from "express-basic-auth";
import url from "url";
import { Agent } from 'node:https';
import { OData } from "@odata/client";
import { PurchaseOrder } from "/home/node/chatbot-api/API-Entities/CE_PURCHASEORDER_0001";

const oAppApi = new express();
const oAiModel = new GoogleGenAI({ apiKey: "dummy-key" });
const iPort = 3000;

//to get data from VCAP_SERVICES:: Applications running in Cloud Foundry gain access 
//to the bound service instances via credentials stored in an environment variable called VCAP_SERVICES.
/* const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
const destSrvCred = VCAP_SERVICES.destination[0].credentials;
const conSrvCred = VCAP_SERVICES.connectivity[0].credentials; */

// Data File
const sDataFilePath = 'data.json';

oAppApi.use(basicAuth({
    users: {
        'admin': 'supersecret',
        'testUser': 'Megavnn123@@'
    }
}));

oAppApi.listen(iPort, (oError) => {
    console.log(`OpenAI API is running on port ${iPort}`);

    if (oError) {
        console.log("Error : ", oError);
    };
});

oAppApi.get("/get", (req, res) => {
    res.send("<p>Welcome to Gemini API Gateway</p><p>Service is Up & Running </p><p></p>" + Date());
});

oAppApi.post("/post", async (req, res) => {
    const sResult = await _callAI();
    res.send(sResult);
});

oAppApi.get("/podetails", async (req, res) => {
    /* const sDestToken = await _fetchJwtToken(destSrvCred.url, destSrvCred.clientid, destSrvCred.clientsecret);
    const oDestiConfig = await _readDestinationConfig("purchase-order-api", destSrvCred.uri, sDestToken); */
    const sServiceUrl  = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001";
    // queryParam = url.parse(req.url, true).query;

    /* try {
        const oResult = await _poDetails(sTargetUrl, sTargetObject);
        res.json(oResult);
    } catch (oError) {
        console.log("oError : ", oError)
        res.json({ "d": { "error": "error" } })
    }; */

    const sOdataSrvUrl = "https://my402028.s4hana.cloud.sap/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001/";
    const oOdataClient = OData.New4({ serviceEndpoint: sOdataSrvUrl });

    oOdataClient.setCredential({
        username: "KietPA7@fpt.com",
        password: "Megavnn24120509@@"
    });
    let _selectPurchaseOrder = async () => {
        console.log('Executing Query')

        const oFilter = oOdataClient.newFilter().property("PurchaseOrder").eq("4500000001");

        let result = await oOdataClient.newRequest({
            collection: "PurchaseOrder",
            params: oOdataClient.newParam().filter(oFilter)
        })
        console.log('Executed OData Query (1) successfully.')
        console.log(JSON.stringify(result))
    };

    _selectPurchaseOrder();
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

const _poDetails = async (sDestiConfg, sTargetObject) => {
    return new Promise((resolve, reject) => {
        const sTargetUrl = sServiceUrl + "/PurchaseOrder";
        //Buffer.from(oDestiConfi.User + ':' + oDestiConfi.Password).toString("base64");
        const oConfig = {
            headers: {
                "APIKey": "CuZbkJRtlUMBAtEKZIkrg0DC1EGPjDgh"
            }
        };

        const oInstance = axios.create(/* {
            httpsAgent: new Agent({
                rejectUnauthorized: false
            })
        } */);

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

const _callAI = async () => {
    const response = await oAiModel.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{
            "parts": [{ "text": "Please explain how AI works in a few word." }]
        }],
    });
    return response.text;
};