 
const https = require('https')

exports.convertToRub = function (req, res){
    const options = {
        hostname: 'api.currencylayer.com',
        path: `/convert?from=RUB&to=USD&amount=${req.body.sum}&access_key=DSNJCnxjnfkDJSNXmcvdjf`,
        method: 'GET'
    };
      
    const convertRequest = https.request(options, result => {
        res.send(result);
    });

    convertRequest.end()
}
