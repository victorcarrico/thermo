var args = arguments[0] || {};

function openProfile(){
	var profile = Alloy.createController("profile").getView();
	profile.open();
}

function openCadastro(){
	var cadastro = Alloy.createController("cadastro").getView();
	cadastro.open();
}

function openSobre(){
	var sobre = Alloy.createConroller("sobre").getView();
	sobre.open();
}

function attUsers() {
	
	var requestUsers = Ti.Network.createHTTPClient();

	requestUsers.open("GET", "http://localhost:8000/users");

	requestUsers.onload = function () {
		if(this.status == '200' || this.status == '201' || this.status == '301') { 
			users = JSON.parse(this.responseText);
		}	
	};

	var tableData = [];
	var row = null;
	
	requestUsers.send();
	
	setTimeout(function(){	
		for (var i=0;users[i] != null;i++){
			row = Alloy.createController('row', {user : users[i]}).getView();
			tableData.push(row);
			//alert(users[i]);
		}
		$.tableView.setData(tableData);
	},6000);

}