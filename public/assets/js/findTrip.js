
var maxDuration = 10;
var maxDifficulty = 5;
var maxDistance;

function findTrip() {  //is activated when the "sig up" button is clicked
//TODO: lage if for om noen er tomme
    maxDuration    = document.getElementById("distanceTrip").value;
    maxDistance    = document.getElementById("inputDistanceToStart").value;
    maxDifficulty  = document.getElementById("difficult").value;


    //Plassering, avstand til punktet, må bruke kortestevei greier
    //var plassering = document.getElementById("startPos").value;
    //var distanceToPoint = document.getElementById("inputDistanceToStart").value;

    //Get info from front end  (user), and send the info to back end so it can check database

        delete sessionStorage.tripName;
        $.post("/findTrip",
            {
                "difficulty" : maxDifficulty,
                "duration" : maxDuration
            }
        ).complete( function(data,status){
            console.log(data);
            console.log("Data loaded: " + data+ "\nStatus: " + status);
            sessionStorage.tripName = data.responseJSON.tripName;
        })
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){

    //LOADING newUser
    //Click the button event!
    $(document).on('click', '#btnSearch', function(){
        alert("Longitude: " + longitude + " Latitude: " + latitude + " Avstand til Startpnkt: "
            + distanceValue.value + " Lengde på tur: " + distanceTripValue.value + " Vanskelighetsgrad: " + difficult.value);
    });


});