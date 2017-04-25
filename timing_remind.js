/*jshint esversion: 6 */
var schedule = require('node-schedule');
var data = require('./catch.js');

const timing_remind = (busID, stopUID) => {
	var rule = new schedule.RecurrenceRule();
	rule.second = 0;
	schedule.scheduleJob(rule, function(){
		data.BusGetTime(busID, stopUID, (data) => {
			if(data <= 180){
				console.log('請準備下車');
			}
		});
	});
};