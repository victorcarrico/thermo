var user = arguments[0].user;

$.row.setTitle(user.name);
$.switchButton.setValue(user.on);

function openDetails() {
	
	if($.switchButton.value){
		var details = Alloy.createController('details', {user : user}).getView();
		details.open({
			right:0,
		});
		details.animate({
			left:0,
			duration:300
		});
	}
}
