var map = null;
    var ourCoords =  {
        latitude: 50.4463906,
        longitude: 30.4489635
    };
    
    window.onload = ()=> {
        showMap(ourCoords)
    };
    
    
    // ------------------ End Ready Bake -----------------
    
    function showMap(coords) {
        var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
        var mapOptions = {
            zoom: 10,
            center: googleLatAndLong,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapDiv = document.getElementById("map");
        map = new google.maps.Map(mapDiv, mapOptions);
    
        // add the user marker
        var title = "Our location"
        var content = "ул. Борщаговская, 146"
    
        addMarker(map, googleLatAndLong,title,content);
    
    }
    
    function addMarker(map, latlong,title,content) {
        var markerOptions = {
            position: latlong,
            map: map,
            clickable: true,
            title:title
        };
        var marker = new google.maps.Marker(markerOptions);
    
        var infoWindowOptions = {
            
            position: latlong,
            content:content
        };
    
        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map);
        });
    }
    
    
    function displayError(error) {
        var errorTypes = {
            0: "Unknown error",
            1: "Permission denied",
            2: "Position is not available",
            3: "Request timeout"
        };
        var errorMessage = errorTypes[error.code];
        if (error.code == 0 || error.code == 2) {
            errorMessage = errorMessage + " " + error.message;
        }
        var div = document.getElementById("location");
        div.innerHTML = errorMessage;
    }