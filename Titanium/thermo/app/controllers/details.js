var user = arguments[0].user;
var temp = [];

$.win1.setTitle('Termometro do ' + user.name);
$.labelTemp.setText('Temperatura agora: ');
$.labelID.setText('ID:' + user.user_id);
$.name.setHintText(user.name);

function attTemp() {
	if($.switchATT.value){
		var stop = setInterval(function(){	
			var requestTemp = Ti.Network.createHTTPClient();

			requestTemp.open("GET", "http://localhost:8000/status");

			requestTemp.onload = function () {
				if(this.status == '200' || this.status == '201' || this.status == '301') { 
					temp = JSON.parse(this.responseText);
					//alert(temp);
				}	
			};
	
			requestTemp.send();
			if(temp.length>1){
				ultimaTemp = temp[temp.length -1];
				//alert(ultimaTemp);
				$.labelTemp.setText('Temperatura agora: ' + ultimaTemp.temp);
			}
		
		},2000);
	}else{
		clearInterval(stop);
	}
	
}

function voltar(){
	$.details.animate({
		left:340,
		duration:300
	});
}

