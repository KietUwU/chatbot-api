const _fetchJwtToken = async (sOAuthUrl, sOAuthClient, sOAuthSecret) => {
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

export{
    _fetchJwtToken,
    _readDestinationConfig
}