/*jshint esversion: 6 */
var request = require('request');

const busgetdata = (plate,callback) => {
   request('http://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Kaohsiung?$filter=PlateNumb%20eq%20%27'+plate+'%27&$format=JSON', 
		(error, response, body) => {
	  		if (!error && response.statusCode == 200) {
	 	    		var bb =JSON.parse(body);
	 	    		var aa = [];
	 	    		for (var i = 0; i < bb.length; i++) {
	 	    			aa[i]=[];
	 	    			aa[i][0]=bb[i].StopName.Zh_tw;
	 	    			aa[i][1]=bb[i].StopUID;
	 	    			aa[i][2]=bb[i].EstimateTime;
	 	    			
	 	    		}
	 	    		callback(aa);
	  		}
	});
};

const BusGetTime = (busID, stopUID, callback) => {
   request('http://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Kaohsiung?$filter=((PlateNumb%20eq%20%27' + busID + '%27)%20and%20(StopUID%20eq%20%27' + stopUID + '%27))&$format=JSON', 
		(error, response, body) => {
	  		if (!error && response.statusCode == 200) {
	  			var data = JSON.parse(body);
	 	    	callback(data[0].EstimateTime);
	  		}
	});
};

exports.busgetdata=busgetdata;
exports.BusGetTime=BusGetTime;