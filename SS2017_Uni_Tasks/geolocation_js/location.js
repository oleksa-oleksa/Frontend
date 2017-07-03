// Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        var beuth = new google.maps.LatLng(52.5453206, 13.3546582);
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 52.5, lng: 13.4},
          zoom: 12
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            var currentPosition = new google.maps.LatLng(pos.lat, pos.lng);
            var dist = google.maps.geometry.spherical.computeDistanceBetween(beuth, currentPosition);

            document.getElementById("standortContent").textContent = currentPosition.lat().toString() + ", " + currentPosition.lng().toString();
            document.getElementById("standortAccuracy").textContent = position.coords.accuracy.toFixed(2);
            document.getElementById("entfernungContent").textContent = dist.toFixed(2) + " meters";
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }