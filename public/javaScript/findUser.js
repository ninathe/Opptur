
//Talking to frontEnd
function logIn(){
    var email= document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    //Get info from front end  (user), and send the info to back end so it can check database
    $.post("/logIn",
        {
            "email" : email,
            "password": password
        }
    ).complete( function(data,status){
        console.log("Data loaded: " + data + "\nStatus: " + status);
        //req.getResponseHeader();   //TODO : får  throw new Error('Can\'t set headers after they are sent.');


        if (status.valueOf()){
            console.log('status er true');

        }else{
            console.log('status is false');
        }
    })
}


