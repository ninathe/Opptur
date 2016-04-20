/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUPS
//0 means disabled; 1 means enabled;
var infoStatus = 0;

//loading info
function loadInfoPopup(){
	//loads popup only if it is disabled
	if(infoStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#infoPopup").fadeIn("slow");
		infoStatus = 1;
	}
}

//disabling info
function disableInfoPopup(){
	//disables popup only if it is enabled
	if(infoStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#infoPopup").fadeOut("slow");
		infoStatus = 0;
	}
}

//centering info
function centerInfoPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#infoPopup").height();
	var popupWidth = $("#infoPopup").width();
	//centering
	$("#infoPopup").css({
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
	
	//LOADING info
	//Click the button event!
	$(document).on('click', '#BtnInfo', function(){
		//centering with css
		centerInfoPopup();
		//load popup
		loadInfoPopup();
	});
				
	//CLOSING info
	//Click out event!
	$(document).on('click', '#backgroundPopup', function(){
		disableInfoPopup();
	});
	$(document).on('click', '#tripsPopup', function(){
		disableInfoPopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && loginStatus==1){
			disableInfoPopup();
		}
	});

});