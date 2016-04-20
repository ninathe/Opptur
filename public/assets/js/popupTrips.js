var TripsStatus = 0;

//loading Trips
function loadTripsPopup(){
	//loads popup only if it is disabled
	if(TripsStatus==0){
		$("#backgroundTripsPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundTripsPopup").fadeIn("slow");
		$("#tripsPopup").fadeIn("slow");
		TripsStatus = 1;
	}
}

//disabling Trips
function disableTripsPopup(){
	//disables popup only if it is enabled
	if(TripsStatus==1){
		$("#backgroundTripsPopup").fadeOut("slow");
		$("#tripsPopup").fadeOut("slow");
		TripsStatus = 0;
	}
}

//centering Trips
function centerTripsPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#tripsPopup").height();
	var popupWidth = $("#tripsPopup").width();
	//centering
	$("#tripsPopup").css({
		"position": "absolute",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundTripsPopup").css({
		"height": windowHeight
	});
	
}




//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING Trips
	//Click the button event!
	$(document).on('click', '#btnSearch', function(){
		//centering with css
		centerTripsPopup();
		//load popup
		loadTripsPopup();
	});
				
	//CLOSING Trips
	//Click out event!
	$(document).on('click', '#backgroundTripsPopup', function(){
		disableTripsPopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && loginStatus==1){
			disableTripsPopup();
		}
	});

});