
    //Latitude measurements range from –90° to +90° Longitude measurements range from –180° to +180°
var LATITUDE_REGEX =/^([-+]?\d{1,2}([.]\d+)?)$/g;
var LONGITUDE_REGEX = /\s*([-+]?\d{1,3}([.]\d+)?)$/g;
var NUMBER_REGEX = /^\d+$/;


function registerTrip(){  //is activated when the "registerTurBtn" button is clicked
    var path            = shape_for_db;
    //var latlng          = document.getElementById("map").getCenter();
    //var zoom            = document.getElementById("map").getZoom();
    var tripName        = document.getElementById("tripNavn").value;
    var place           = document.getElementById("tripPlassering").value;
    var description     = document.getElementById("tripBeskrivelse").value;
    var difficulty      = document.getElementById("difficult").value;
    var duration        = document.getElementById("estmturtid").value;
    var nameValid       = checkName(tripName);

    if(nameValid){
         $.post("/makeTrip",
            {
                tripName: tripName,
                place: place,
                difficulty : difficulty,
                description: description,
                duration : duration,
                center : {
                    lat :center.lat,
                    long : center.lng
                },
                zoom : zoom,
                path : path,
                godkjent : false
            })
            .done( function(data,status){
                alert(data);
                alert("Data loaded: " + data + "\nStatus: " + status);
            })
    }
    location.reload();
}




//validate name or place
function checkName(name){
    if (name.length<1){
        alert('Husk å fylle inn turnavnet.');
        return false
    }return true;
}
