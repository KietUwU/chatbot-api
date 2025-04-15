import axios from "axios";

// Define the API endpoint
const sUrl = "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001/PurchaseOrder";

// Set headers with API key
const oHeaders = {
    headers: {
        "APIKey": "CuZbkJRtlUMBAtEKZIkrg0DC1EGPjDgh"
    }
};

// Make the GET request
axios.get(sUrl, oHeaders)
    .then((response) => {
        console.log("Response Data:", response.data);
    })
    .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
    });
