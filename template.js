/*jshint esversion: 6 */

var stopdata = require('./catch.js');
var one_template = JSON.stringify(require('./template.json'));


//丟DATA進ACTION
const template = (data) =>{
	var one_template_temp = JSON.parse(one_template);
	for(var i=0 ; i<data.length ; i++){
		one_template_temp.actions.push(
			{type : 'postback' ,label : data[i][0] + data[i][2] ,data : data[i][1]}
		);
	}
	console.log(one_template_temp);
};


//資料比數邏輯判斷
const template_all = (data, num) =>{
	var three_data = [];
	for (var i = num; i < data.length; i++) {
		if (i%12==0 && i!=num) {
			three_data[0]=[];
			three_data[0][0]="後";
			three_data[0][1]=i;
			three_data[0][2]=data.length-i+"筆";
			three_data[1]=[];
			three_data[1][0]="";
			three_data[1][1]="";
			three_data[1][2]="";
			three_data[2]=[];
			three_data[2][0]="";
			three_data[2][1]="";
			three_data[2][2]="";
			template(three_data);
			//template_all(data,i);
			break;
		}
		else{
			three_data[i%3]=[];
			three_data[i%3][0]=data[i][0];
			three_data[i%3][1]=data[i][1];
			three_data[i%3][2]=data[i][2];
			if (i%3==2) {
				template(three_data);
			}
			else if (data.length-1==i) {
				var count=i%3;
				for (var j = 0; j < count; j++) {
					three_data[2-j]=[];
					three_data[2-j][0]="";
					three_data[2-j][1]="";
					three_data[2-j][2]="";
				}
				template(three_data);
			}
			
		}
	}
};

//線上測試
/*var bus =stopdata.busgetdata('137-FT',(data) => {
	template_all(data,48);
	for (var i = 0; i < data.length; i++) {
		console.log(data[i]);
	}
	
});*/

//JSON測試
var bus = require('./testbus.json');

var aa = [];
for (var i = 0; i < bus.length; i++) {
	aa[i]=[];
	aa[i][0]=bus[i].StopName.Zh_tw;
	aa[i][1]=bus[i].StopUID;
	aa[i][2]=bus[i].EstimateTime;
	
}
template_all(aa, 12);