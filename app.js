/*jshint esversion: 6 */
const linebot = require('linebot');
var schedule = require('node-schedule');

var data = require('./catch.js');
var template = require('./template.js');
var TimingRemind = require('./TimingRemind');

//bot connection
const bot = linebot({
	channelId: '1483029082',
	channelSecret: 'ada6218baf7780aea777e87de0b5c093',
	channelAccessToken: 'HgmqnvzXuSTtXjB/3yiI0TRFOD2JWImFRFhHavnhGvBLfTeDzBdEREYYWb+oT8zsTfxIBvP4JHHT8kQP853zcJ870pGvKDyKc+zi4cd3ebkitUY8xUa9dkFpIjDjvdNXO5AfquvILjUZ2FLxSluXrwdB04t89/1O/w1cDnyilFU='
});

var busID = '';
var stopUID = '';
var User = ''

var rule = new schedule.RecurrenceRule();
rule.second = 0;
schedule.scheduleJob(rule, function(){
	if(busID!= '' && stopUID!='' && User !=''){
		TimingRemind.TimingRemind(busID, stopUID, (data) => {
			bot.push(User, data);
			console.log(User + data);
		});
	}
});
//bot action
bot.on('message', function (event) {
    switch (event.message.type) {
		case 'text':
				busID = event.message.text;
				event.source.profile().then(function (profile) {
					User = profile.userId;
				});
                template.Template(busID, (BusData) => {
                    console.log(JSON.stringify(BusData));
                	event.reply(BusData);
                });
			break;
    }
});

bot.on('postback', function (event) {
	console.log(User + '  remind  ' + event.postback.data);
	stopUID = event.postback.data;
});

bot.listen('/linewebhook', process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});