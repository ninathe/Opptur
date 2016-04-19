/**
 * Created by Nina on 18.04.16.
 */
// google.maps.event.addDomListener(window, 'load', intilize);

function intilizeLocation() {
    google.maps.event.addDomListener(window, 'load', function(){
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("txtautocomplete"));

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

            var place = autocomplete.getPlace();
            var location = "Address: " + place.formatted_address + "<br/>";
            location += "Latitude: " + place.geometry.location.lat() + "<br/>";
            location += "Longitude: " + place.geometry.location.lng();
            document.getElementById('lblresult').innerHTML = location
        });
    });


}