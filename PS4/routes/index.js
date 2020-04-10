const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {

    const options = {
        'method': 'GET',
        'url': 'http://api.coinlayer.com/api/live?access_key=e969db30c7156cb8334861653ac8f43f&symbols=BTC,ETH,LTC',
        'headers': {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.render('index', {response:JSON.parse(response.body)});
    });

});

module.exports = router;


