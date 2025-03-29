import { GoogleGenAI } from "@google/genai";
import express from "express";
import axios from "axios";
import basicAuth from "express-basic-auth";
import url from "url";
import { resolve } from "path";

import{ getPOList } from './controllers.js';

const oAppApi = new express();
const oAiModel = new GoogleGenAI({ apiKey: "dummy-key" });
const iPort = 3000;

//to get data from VCAP_SERVICES:: Applications running in Cloud Foundry gain access 
//to the bound service instances via credentials stored in an environment variable called VCAP_SERVICES.
//const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
//const destSrvCred = VCAP_SERVICES.destination[0].credentials;
//const conSrvCred = VCAP_SERVICES.connectivity[0].credentials; 
const VCAP_SERVICES = {};
const destSrvCred =  {};
const conSrvCred =  {}; 

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

// get po list
oAppApi.get("/get", getPOList);

oAppApi.post("/post", async (req, res) => {
    const sResult = await _callAI();
    res.send(sResult);
});

oAppApi.get("/podetails", async (req, res) => {

});

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