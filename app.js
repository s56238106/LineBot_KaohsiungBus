/*jshint esversion: 6 */
const linebot = require('linebot');
var data = require('./catch.js');
var template = require('./template.js');

//bot connection
const bot = linebot({
	channelId: '1483029082',
	channelSecret: 'ada6218baf7780aea777e87de0b5c093',
	channelAccessToken: 'HgmqnvzXuSTtXjB/3yiI0TRFOD2JWImFRFhHavnhGvBLfTeDzBdEREYYWb+oT8zsTfxIBvP4JHHT8kQP853zcJ870pGvKDyKc+zi4cd3ebkitUY8xUa9dkFpIjDjvdNXO5AfquvILjUZ2FLxSluXrwdB04t89/1O/w1cDnyilFU='
});

var busID = '133-FT';
var stopUID = "";

//bot action
bot.on('message', function (event) {
    switch (event.message.type) {
		case 'text':
                template.Template(busID, (BusData) => {
                	console.log(BusData);
                    event.reply(BusData);
                });
			break;
    }
});

/*bot.on('postback', function(event){
    console.log(event.postback.data);
    stopUID = event.postback.data;
});*/

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
