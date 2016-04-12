
    //Latitude measurements range from –90° to +90° Longitude measurements range from –180° to +180°
var LATITUDE_REGEX =/^([-+]?\d{1,2}([.]\d+)?)$/g;
var LONGITUDE_REGEX = /\s*([-+]?\d{1,3}([.]\d+)?)$/g;
var NUMBER_REGEX = /^\d+$/;


function registerTrip(){  //is activated when the "sig up" button is clicked
    var tripName        = document.getElementById("reg_name").value;
    var latitude        = document.getElementById("reg_nickname").value;
    var longitude       = document.getElementById("reg_password").value;
    var place           = document.getElementById("reg_password_confirm").value;
    var description     = document.getElementById("reg_password_confirm").value;
    var duration        = document.getElementById("reg_password_confirm").value;
    var difficulty      = document.getElementById("reg_password_confirm").value;
    var nameValid       = checkName(tripName);
    var latitudeValid   = checkLatitude(latitude);
    var longitudeValid  = checkLongitude(longitude);
    var placeValid      = checkName(place);
    var durationValid   = checkDuration(duration);


    if(nameValid && latitudeValid && longitudeValid && placeValid && durationValid){
        $.post("/makeTrip",
            {
                tripName: tripName,
                latitude: latitude,
                longitude: longitude,
                place: place,
                duration : duration,
                description: description,
                difficulty: difficulty,
                users : {}
            })
            .done( function(data,status){
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
        alert("The latitude should be on the format SOMETHING");
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
        alert("The longitude should be on the format SOMETHING");
        return false;
    }
    return true
}

//validate password
function checkDuration(duration) {
    if(duration.length>0 && NUMBER_REGEX.test(duration)) {
        console.log('ok password');
    } else {
        alert("Error: Please check that you've entered and confirmed your password!");
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
