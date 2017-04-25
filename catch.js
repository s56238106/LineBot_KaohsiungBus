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
exports.busgetdata=busgetdata;