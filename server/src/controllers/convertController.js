 
const https = require('https')

exports.convertSum = function (req, res){
    const API_KEY = 'd44ae325031be663f186';
    const amount = parseInt(req.query.sum ?? req.body.sum);
    console.log(amount);
    const options = {
        hostname: 'free.currconv.com',
        path: `/api/v7/convert?q=RUB_USD,RUB_EUR&compact=ultra&apiKey=${API_KEY}`,
        method: 'GET'
    };
      
    const convertRequest = https.request(options, result => {

        result.on('data', (d) => {
            let answer = d.toString('utf-8');

            if (answer.length) {
                answer = JSON.parse(answer);
                const usdSum = answer.RUB_USD * amount;
                const eurSum = answer.RUB_EUR * amount;
                res.send({"usd" : usdSum.toFixed(2), "eur": eurSum.toFixed(2)});
            } 
        });
    });
    
    convertRequest.end();
}
