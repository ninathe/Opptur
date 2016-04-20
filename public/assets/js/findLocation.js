/**
 * Created by Nina on 18.04.16.
 */
var longitude;
var latitude;

function intilizeLocation() {
    google.maps.event.addDomListener(window, 'load', function(){
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("txtautocomplete"));

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

            var place = autocomplete.getPlace();
            var location = "Address: " + place.formatted_address + "<br/>";
            latitude = place.geometry.location.lat();
            longitude = place.geometry.location.lng();
            location += "Latitude: " + latitude + "<br/>";
            location += "Longitude: " + longitude;
            //document.getElementById('lblresult').innerHTML = location
            var marker = L.marker([latitude, longitude]);
            map.addLayer(marker);
            map.setView([latitude, longitude], 8);
            //map.locate({setView: true, maxZoom: 8});
        });
    });


}
