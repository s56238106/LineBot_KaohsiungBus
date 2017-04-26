/*jshint esversion: 6 */

var stopdata = require('./catch.js');
var OneTemplate = JSON.stringify({
  "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
  "title": "this is menu",
  "text": "description",
  "actions": [
  ]
});


//丟DATA進ACTION
const Actions = (data, ActionsData, callback) =>{
	var one_template_temp = JSON.parse(OneTemplate);
	for(var i=0 ; i<data.length ; i++){
		one_template_temp.actions.push(
			{type : 'postback' ,label : data[i][0] + data[i][2],data : data[i][1]}
		);
	}
	ActionsData.template.columns.push(one_template_temp);
	callback(ActionsData);
};


//資料比數邏輯判斷
const ActionsAll = (data, num, ActionsData, callback) =>{
	var three_data = [];
	for (var i = num; i < data.length; i++) {
		if ((i%12==0) && (i!=num)) {
			three_data[0]=[];
			three_data[0][0]="後";
			three_data[0][1]=i+"";
			three_data[0][2]=data.length-i+"筆";
			three_data[1]=[];
			three_data[1][0]="";
			three_data[1][1]="";
			three_data[1][2]="";
			three_data[2]=[];
			three_data[2][0]="";
			three_data[2][1]="";
			three_data[2][2]="";
			Actions(three_data, ActionsData, (BusData) => {
				callback(BusData);
			});
			//template_all(data,i);
			break;
		}
		else{
			three_data[i%3]=[];
			three_data[i%3][0]=data[i][0];
			three_data[i%3][1]=data[i][1];
			three_data[i%3][2]=data[i][2];
			if (i%3==2) {
				Actions(three_data, ActionsData, (BusData) => {
			});
			}
			else if (data.length-1==i) {
				var count=i%3;
				for (var j = 0; j < count; j++) {
					three_data[2-j]=[];
					three_data[2-j][0]="";
					three_data[2-j][1]="";
					three_data[2-j][2]="";
				}
				Actions(three_data, ActionsData, (BusData) => {
					callback(BusData);
			});
			}
		}
	}
};







//線上測試
const Template = (BusId, callback) => {
	var ActionsData = {
		"type": "template",
		"altText": "this is a carousel template",
		"template": {
			"type": "carousel",
			"columns": []
		}
	};
	stopdata.busgetdata(BusId, (data) => {
		ActionsAll(data, 0, ActionsData, (BusData) => {
			callback(BusData);
		});
	});
};

exports.Template=Template;