/*jshint esversion: 6 */
var data = require('./catch.js');

const TimingRemind = (busID, stopUID, callback) => {
	data.BusGetTime(busID, stopUID, (data) => {
		if(data <= 180){
			callback('請準備下車');
		}
	});
};

exports.TimingRemind=TimingRemind;