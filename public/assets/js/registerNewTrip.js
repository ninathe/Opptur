
    //Latitude measurements range from –90° to +90° Longitude measurements range from –180° to +180°
var LATITUDE_REGEX =/^([-+]?\d{1,2}([.]\d+)?)$/g;
var LONGITUDE_REGEX = /\s*([-+]?\d{1,3}([.]\d+)?)$/g;
var NUMBER_REGEX = /^\d+$/;


function registerTrip(){  //is activated when the "registerTurBtn" button is clicked
    console.log("dette er shapet: " +shape_for_db);
    alert("knappen ble trykket");
    var latitude        = "63.1234";
    var longitude       = "10.1234";
    //var latlng          = document.getElementById("map").getCenter();
    //var zoom            = document.getElementById("map").getZoom();
    var tripName        = document.getElementById("tripNavn").value;
    var place           = document.getElementById("tripPlassering").value;
    var description     = document.getElementById("tripBeskrivelse").value;
    var difficulty      = document.getElementById("difficult").value;
    var points          = shape_for_db[0];
    //var latitude        = document.getElementById("reg_latitude").value;
    //var longitude       = document.getElementById("reg_longitude").value;
    //var duration        = document.getElementById("reg_duration").value;
    var nameValid       = checkName(tripName);
    var placeValid      = checkName(place);
    //var latitudeValid   = checkLatitude(latitude);
    //var longitudeValid  = checkLongitude(longitude);
    //var durationValid   = checkDuration(duration);
    console.log("Før posting:::: \nNavnet: "+tripName + "\nplassering: " +place + "\nbeskrivelse: " +description + "\nvanskelighetsgrad: " + difficulty);
    //console.log("Latlng: " + latlng + "Zoom: " + zoom);

    if(nameValid && placeValid){
         $.post("/makeTrip",
            {
                tripName: tripName,
                latitude: latitude,
                longitude: longitude,
                place: place,
                difficulty : difficulty,
                description: description,
                //duration : Number,
                center : {
                    lat :63.446827,
                    long : 10.421906
                },
                zoom : 5,
                path : points
            })
            .done( function(data,status){
                alert(data);
                alert("Data loaded: " + data + "\nStatus: " + status);
            })
    }
}


//Validates the latiitude
function checkLatitude(lat){
    var validLatitude = LATITUDE_REGEX.test(lat);
    if(lat.length<1) {
        alert("Error: Fill in the latitude!");
        return false;
    }
    if(!validLatitude) {
        alert("The latitude should be on the format 63.4468");
        return false;
    }
    return true
}//Validates the longitude
function checkLongitude(long){
    var validLongitude = LONGITUDE_REGEX.test(long);
    if(long.length<1) {
        alert("Error: Fill in the longitude!");
        return false;
    }
    if(!validLongitude) {
        alert("The longitude should be on the format 10.4219");
        return false;
    }
    return true
}

//validate password
function checkDuration(duration) {
    if(duration.length>0 && NUMBER_REGEX.test(duration)) {
    } else {
        alert("Error: Please check that you've entered the duration on the form hh-hh!");
        return false;
    }
    return true;
}

//validate name or place
function checkName(name){
    if (name.length<1){
        console.log('Fill something in');
        return false
    }return true;
}
