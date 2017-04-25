/*jshint esversion: 6 */


//LINEBOT CONNECTION
const linebot = require('linebot');

const bot = linebot({
	channelId: '1483029082',
	channelSecret: 'ada6218baf7780aea777e87de0b5c093',
	channelAccessToken: 'HgmqnvzXuSTtXjB/3yiI0TRFOD2JWImFRFhHavnhGvBLfTeDzBdEREYYWb+oT8zsTfxIBvP4JHHT8kQP853zcJ870pGvKDyKc+zi4cd3ebkitUY8xUa9dkFpIjDjvdNXO5AfquvILjUZ2FLxSluXrwdB04t89/1O/w1cDnyilFU='
});

//CATCH DATA
var data = require('./catch.js');

var bus = data.busgetdata('127-FT',(data) => {
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < data[i].length; j++) {
			if (data[i][j]=='KHH5224') {
				console.log(data[i]);
			}
		}
		
	}
});



//LINEBOT ACTION
bot.on('message', function (event) {
    switch (event.message.type) {
		case 'text':
		    event.reply('Unknow message: ' + JSON.stringify(event).text);






			break;
    }
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});