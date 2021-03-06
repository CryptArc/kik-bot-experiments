'use strict';

let request = require('request');
let getenv = require('getenv');

var options = {
    uri : 'https://api.kik.com/v1/config',
    method : 'POST',
    auth: {
        'user': getenv('KIK_USERNAME'),
        'pass': getenv('KIK_APIKEY'),
        'sendImmediately': false
    },
    json: {
        'webhook': getenv('KIK_WEBHOOK'),
        'features': {
            'manuallySendReadReceipts': false,
            'receiveReadReceipts': false,
            'receiveDeliveryReceipts': false,
            'receiveIsTyping': false
        }            
    }
}
request(options, function(error, response, body){
    console.log('POST bot config callback', error, body);
});