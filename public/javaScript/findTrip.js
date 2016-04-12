
function findTrip() {  //is activated when the "sig up" button is clicked
    var duration = document.getElementById("distanceTripValue").value;
    var difficulty = document.getElementById("difficultyValue").value;


    //Plassering, avstand til punktet, må bruke kortestevei greier
    var plassering = document.getElementById("startPos").value;
    var distanceToPoint = document.getElementById("distanceValue").value;



    //Get info from front end  (user), and send the info to back end so it can check database
    $.post("/findTrip",  //TODO: få til at den finner avstand som er lik ELLER MINDRE
        {
            "duration" : 123,
            "difficulty": 2
        }
    ).complete( function(data,status){
        console.log("Data loaded: " + data + "\nStatus: " + status);

    })

}