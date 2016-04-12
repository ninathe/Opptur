/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUPS
//0 means disabled; 1 means enabled;
var loginStatus = 0;

//loading login
function loadPopup(){
	//loads popup only if it is disabled
	if(loginStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#loginPopup").fadeIn("slow");
		loginStatus = 1;
	}
}

//disabling login
function disablePopup(){
	//disables popup only if it is enabled
	if(loginStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#loginPopup").fadeOut("slow");
		loginStatus = 0;
	}
}

//centering login
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#loginPopup").height();
	var popupWidth = $("#loginPopup").width();
	//centering
	$("#loginPopup").css({
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
	
	//LOADING logIn
	//Click the button event!
	$(document).on('click', '#BtnlogIn', function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});

	//CLOSING logIn
	//Click the x event!
	$(document).on('click', '#lukk', function(){
		disablePopup();
	});
	//Click out event!
	$(document).on('click', '#backgroundPopup', function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && loginStatus==1){
			disablePopup();
		}
	});

});