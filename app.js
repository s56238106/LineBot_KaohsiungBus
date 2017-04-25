/*jshint esversion: 6 */
const linebot = require('linebot');
var data = require('./catch.js');

//bot connection
const bot = linebot({
	channelId: '1483029082',
	channelSecret: 'ada6218baf7780aea777e87de0b5c093',
	channelAccessToken: 'HgmqnvzXuSTtXjB/3yiI0TRFOD2JWImFRFhHavnhGvBLfTeDzBdEREYYWb+oT8zsTfxIBvP4JHHT8kQP853zcJ870pGvKDyKc+zi4cd3ebkitUY8xUa9dkFpIjDjvdNXO5AfquvILjUZ2FLxSluXrwdB04t89/1O/w1cDnyilFU='
});

var busID = '127-FT';
var stopUID = "";

//bot action
bot.on('message', function (event) {
    switch (event.message.type) {
		case 'text':
		  /*  var bus =data.busgetdata(busID,(data) => {
				var num = -1;
				for (var i = 0; i < data.length; i++) {
					if (data[i][1] == event.message.text) {
						num = i;
					}
				}
				if(num != -1){
		    		event.reply(data[num][0] + "\r\n" + data[num][1] + "\r\n" + data[num][2]);
				}else{
		    		event.reply("not found:404");
				}
		    });*/

		    var a =
{"type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
            "title": "this is menu",
            "text": "description",
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=111"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=111"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/111"
                }
            ]
          },
          {
            "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
            "title": "this is menu",
            "text": "description",
            "actions": [
                {
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=222"
                },
                {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=222"
                },
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/222"
                }
            ]
          }
      ]
  }
};
		    event.reply(a);

			break;
    }
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});
