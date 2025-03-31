var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

//setting request method
//API endpoint for API sandbox 
xhr.open("GET", "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata4/sap/api_purchaseorder_2/srvd_a2x/sap/purchaseorder/0001/PurchaseOrder?%24count=true&%24top=50");


//adding request headers
xhr.setRequestHeader("DataServiceVersion", "2.0");
xhr.setRequestHeader("Accept", "application/json");


//sending request
xhr.send(data);