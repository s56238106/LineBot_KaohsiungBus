/*jshint esversion: 6 */
const linebot = require('linebot');
var data = require('./catch.js');


const bot = linebot({
	channelId: '1483029082',
	channelSecret: 'ada6218baf7780aea777e87de0b5c093',
	channelAccessToken: 'HgmqnvzXuSTtXjB/3yiI0TRFOD2JWImFRFhHavnhGvBLfTeDzBdEREYYWb+oT8zsTfxIBvP4JHHT8kQP853zcJ870pGvKDyKc+zi4cd3ebkitUY8xUa9dkFpIjDjvdNXO5AfquvILjUZ2FLxSluXrwdB04t89/1O/w1cDnyilFU='
});
var busID = '127-FT';
var text = 'KHH5224';


bot.on('message', function (event) {
    switch (event.message.type) {
		case 'text':
		    var bus =data.busgetdata(busID,(data) => {
				for (var i = 0; i < data.length; i++) {
					if (data[i][1]==event.message.text) {
		    			event.reply(data[i][0] + "\r\n" + data[i][1]);
					}
				}
		    });
			break;
    }
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
