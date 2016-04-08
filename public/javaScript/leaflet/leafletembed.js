var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];
var yourPos;
var posCircle;
var lat;
var long;

//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){


});
//LOADING info
//Click the button event!


//window.onload=pos();


	$('#checkForm :checkbox').click(function() {
		var $this = $(this);
		// $this will contain a reference to the checkbox
		if ($this.is(':checked')) {
			givePosition();
			document.getElementById("startPos").disabled = true;
		} else{
			remove();
			map.removeLayer(yourPos);
			map.removeLayer(posCircle);
			console.log("Layer?" + map.hasLayer(yourPos));
			console.log(map.removeLayer(yourPos));
			map.setView(new L.LatLng(63.446827, 10.421906),5);
			map.locate({setView: true, maxZoom: 10});
			document.getElementById("startPos").disabled = false;

		}

	});

function remove(){
	map.removeLayer(yourPos);

}



initmap();

function initmap() {
	// set up AJAX request
	ajaxRequest=getXmlHttpObject();
	if (ajaxRequest==null) {
		alert ("This browser does not support HTTP Request");
		return;
	}

	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 4, maxZoom: 20, attribution: osmAttrib});

	// start the map in trd
	map.setView(new L.LatLng(63.446827, 10.421906),5);
	//map.locate({setView: true, maxZoom: 8});
	map.addLayer(osm);

	//askForPlots();
	//map.on('moveend', onMapMove);
}

function getXmlHttpObject() {
	if (window.XMLHttpRequest) { return new XMLHttpRequest(); }
	if (window.ActiveXObject)  { return new ActiveXObject("Microsoft.XMLHTTP"); }
	return null;
}


function stateChanged() {
	// if AJAX returned a list of markers, add them to the map
	if (ajaxRequest.readyState==4) {
		//use the info here that was returned
		if (ajaxRequest.status==200) {
			plotlist=eval("(" + ajaxRequest.responseText + ")");
			removeMarkers();
			for (i=0;i<plotlist.length;i++) {
				var plotll = new L.LatLng(plotlist[i].lat,plotlist[i].lon, true);
				var plotmark = new L.Marker(plotll);
				plotmark.data=plotlist[i];
				map.addLayer(plotmark);
				plotmark.bindPopup("<h3>"+plotlist[i].name+"</h3>"+plotlist[i].details);
				plotlayers.push(plotmark);
			}
		}
	}
}

function removeMarkers() {
	for (i=0;i<plotlayers.length;i++) {
		map.removeLayer(plotlayers[i]);
	}
	plotlayers=[];
}

function setPos(lat, long){
	yourPos = L.marker([lat, long]).addTo(map);
}

//Position map:
function onLocationFound(e) {
	lat= e.latitude;
	long= e.longitude;
	var radius = e.accuracy / 2;
	yourPos = L.marker(e.latlng).addTo(map);
	//yourPos = L.marker([63.4, 10.4]).addTo(map);


	console.log(yourPos);
	//map.addLayer(yourPos);
	//yourPos.bindPopup("Du er innenfor " + radius + " meter fra dette punktet").openPopup();

	posCircle = L.circle(e.latlng, radius);
	posCircle.addTo(map);

	//setPos(lat, long);
}

//Mulig løsning her med callback? http://stackoverflow.com/questions/5000415/call-a-function-after-previous-function-is-complete
//$.when($.ajax(onLocationFound(e))).then( setPos (lat,long){setPos(lat,long);});

function givePosition() {

	//Setter marker ved posisjon:



	//yourPos = L.marker([lat, long]).addTo(map);



	map.locate({setView: true, maxZoom: 8});
	map.on('locationfound', onLocationFound);


	//legger inn en plassering på kartet :)
	//var marker = L.marker([61.6365, 8.3124]).addTo(map);
	//var myrken = L.marker([60.87766484, 6.46662943]).addTo(map);
	//marker.bindPopup("<b>Galdhøpiggen</b><br>2469 moh").openPopup()
}

function askForPlots() {
	// request the marker info with AJAX for the current bounds
	var bounds=map.getBounds();
	var minll=bounds.getSouthWest();
	var maxll=bounds.getNorthEast();
	var msg='leaflet/findbybbox.cgi?format=leaflet&bbox='+minll.lng+','+minll.lat+','+maxll.lng+','+maxll.lat;
	ajaxRequest.onreadystatechange = stateChanged;
	ajaxRequest.open('GET', msg, true);
	ajaxRequest.send(null);
}

function onMapMove() {
	askForPlots();
}

