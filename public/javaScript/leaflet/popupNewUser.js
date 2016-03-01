/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUPS
//0 means disabled; 1 means enabled;
var newUserStatus = 0;

//loading newUser
function loadNewUserPopup(){
	//loads popup only if it is disabled
	if(newUserStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#newUserPopup").fadeIn("slow");
		newUserStatus = 1;
	}
}

//disabling newUser
function disableNewUserPopup(){
	//disables popup only if it is enabled
	if(newUserStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#newUserPopup").fadeOut("slow");
		newUserStatus = 0;
	}
}

//centering newUser
function centerNewUserPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#newUserPopup").height();
	var popupWidth = $("#newUserPopup").width();
	//centering
	$("#newUserPopup").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}




//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING newUser
	//Click the button event!
	$("#BtnNewUser").click(function(){
		//centering with css
		centerNewUserPopup();
		//load popup
		loadNewUserPopup();
	});
				
	//CLOSING newUser
	//Click the x event!
	$("#lukk").click(function(){
		disableNewUserPopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disableNewUserPopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && newUserStatus==1){
			disableNewUserPopup();
		}
	});

});