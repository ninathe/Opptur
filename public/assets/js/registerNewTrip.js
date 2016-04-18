/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!
/***************************/

//SETTING UP OUR POPUPS
//0 means disabled; 1 means enabled;
var loginStatus = 0;

function registerTrip(){
    console.log("hgdjd");
}

//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){

    //LOADING logIn
    //Click the button event!
    $(document).on('click', '#BtnRegisterTrip', function(){
        registerTrip();
    });


});/**
 * Created by kristinajakobsen on 18.04.16.
 */
