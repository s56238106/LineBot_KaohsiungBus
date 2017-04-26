/*jshint esversion: 6 */
var data = require('./catch.js');

const TimingRemind = (busID, stopUID) => {
	data.BusGetTime(busID, stopUID, (data) => {
		if(data <= 180){
			console.log('請準備下車');
		}
	});
};

exports.TimingRemind=TimingRemind;