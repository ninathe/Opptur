
function findTrip() {  //is activated when the "sig up" button is clicked
    var duration = document.getElementById("distanceTripValue").value;


    //Plassering, avstand til punktet, må bruke kortestevei greier
    //var plassering = document.getElementById("startPos").value;
    //var distanceToPoint = document.getElementById("inputDistanceToStart").value;



    //Get info from front end  (user), and send the info to back end so it can check database
    $.post("/findTrip",
        {
            "duration" : duration,
        }
    ).complete( function(data,status){
        console.log("Data loaded: " + data + "\nStatus: " + status);

    })

}