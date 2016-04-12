/**
 * Created by Nina on 12.04.16.
 */
/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!
/***************************/

//SETTING UP OUR POPUPS
//0 means disabled; 1 means enabled;
var registerTripStatus = 0;

//loading newUser
function loadCreateTripPopup(){
    //loads popup only if it is disabled
    if(newUserStatus==0){
        $("#backgroundPopup").css({
            "opacity": "0.7"
        });
        $("#backgroundPopup").fadeIn("slow");
        $("#RegistrerTrip").fadeIn("slow");
        registerTripStatus = 1;
    }
}

//disabling newUser
function disableCreateTripPopup(){
    //disables popup only if it is enabled
    if(registerTripStatus==1){
        $("#backgroundPopup").fadeOut("slow");
        $("#RegistrerTrip").fadeOut("slow");
        registerTripStatus = 0;
    }
}

//centering newUser
function centerCreateTripPopup(){
    //request data for centering
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    var popupHeight = $("#RegistrerTrip").height();
    var popupWidth = $("#RegistrerTrip").width();
    //centering
    $("#RegistrerTrip").css({
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
    $(document).on('click', '#BtnCreateTrip', function(){
        //centering with css
        centerCreateTripPopup();
        //load popup
        loadCreateTripPopup();
    });

    //CLOSING newUser
    //Click the x event!
    $(document).on('click', '#lukk', function(){
        disableCreateTripPopup();
    });
    //Click out event!
    $(document).on('click', '#backgroundPopup', function(){
        disableCreateTripPopup();
    });
    //Press Escape event!
    $(document).keypress(function(e){
        if(e.keyCode==27 && newUserStatus==1){
            disableCreateTripPopup();
        }
    });

});