/*jshint esversion: 6 */
var request = require('request');

const busgetdata = (plate,callback) => {
   request('http://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Kaohsiung?$top=30&$format=JSON', 
		(error, response, body) => {
	  		if (!error && response.statusCode == 200) {
	 	    		callback(body[0]);
	  		}
	});
};





exports.busgetdata=busgetdata;