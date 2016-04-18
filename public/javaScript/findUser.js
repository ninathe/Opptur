
//Talking to frontEnd
function logIn(){
    var email= document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    //Get info from front end  (user), and send the info to back end so it can check database
    $.post("/logIn",
        {
            "email" : email,
            "password": password
        })
        .done( function(data,status){
        console.log("Data loaded: " + data + "\nStatus: " + status);
        })
    $("#backgroundPopup").fadeOut("slow");
    $("#loginPopup").fadeOut("slow");
}


