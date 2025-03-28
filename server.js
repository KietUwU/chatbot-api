import { GoogleGenAI } from "@google/genai";
import express from "express";
import axios from "axios";
import basicAuth from "express-basic-auth";
import url from "url";
import { resolve } from "path";

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

});

const _fetchToken = async (sOAuthUrl, sOAuthClient, sOAuthSecret) => {
    return new Promise((resolve, reject) => {
        const sTokenUrl = sOAuthUrl + '/oauth/token?grant_type=client_credentials&response_type=token';
        const oConfig = {
            headers: {
                Authorization: "Basic " + Buffer.from(sOAuthClient + ':' + sOAuthSecret).toString("base64")
            }
        };

        axios.get(sTokenUrl, oConfig)
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

const _poDetails = async () => {

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