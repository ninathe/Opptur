$(document).ready(
    function() {
        $(".user").focusin(function(){
          $(".inputUserIcon").css("color", "#ffa44c");
        }).focusout(function(){
          $(".inputUserIcon").css("color", "white");
        });

        $(".pass").focusin(function(){
          $(".inputPassIcon").css("color", "#ffa44c");
        }).focusout(function(){
          $(".inputPassIcon").css("color", "white");
        });
    }
);