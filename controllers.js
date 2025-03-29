import { _fetchJwtToken, _readDestinationConfig } from './utils.js';

const _poList = async (connProxyHost, connProxyPort, connJwtToken, destiConfi) =>{
    return new Promise((resolve, reject) => {
        // make target URL 
        const targetUrl = destiConfi.URL + "oata uri";
        //encode user creds fetched from the destination configuration
        const encodedUser = Buffer.from(destiConfi.User + ':' + destiConfi.Password).toString("base64")
        //preparation for the  onPrem/Remote  system call
        const config = {
            headers: {
                Authorization: "Basic " + encodedUser,
                'Proxy-Authorization': 'Bearer ' + connJwtToken,
                'SAP-Connectivity-SCC-Location_ID': destiConfi.CloudConnectorLocationId
            },
            proxy: {
                host: connProxyHost,
                port: connProxyPort
            }
        }
        // get call to the onPrem/Remote system to fetch data
        axios.get(targetUrl, config)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

const getPOList = async (req, res) => {
//res.send("<p>Welcome to Gemini API Gateway</p><p>Service is Up & Running </p><p></p>" + Date());
    // call destination service //
    //fetch detination auth token
    const destJwtToken = await _fetchJwtToken(destSrvCred.url || '', destSrvCred.clientid || '', destSrvCred.clientsecret || '');
    //read destination config
    const destiConfi = await _readDestinationConfig('S4_purchase_order', destSrvCred.uri || '', destJwtToken);

    const connJwtToken = await _fetchJwtToken(conSrvCred.token_service_url || '', conSrvCred.clientid || '', conSrvCred.clientsecret || '');

    try {
        // method to make a call to onPrem/Remote system, and save the result in variable "result"
        const result = await _poList(conSrvCred.onpremise_proxy_host, conSrvCred.onpremise_proxy_http_port, connJwtToken, destiConfi)
        res.json(result);
    }
    //catch block to handle any errors
    catch (e) {
        console.log('Catch an error: ', e)
        res.json({ "d": { "error": "error" } })
    }
}

export {
    getPOList
}