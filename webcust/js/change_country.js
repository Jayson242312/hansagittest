let countries = [];
let countryCodes = [];
$('#mapText a').each(function(){
  countries.push($(this).html());
  countryCodes.push($(this).attr('href'));
});

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.396, lng: 16.941},
    zoom: 4
  });

  $.each(countries,function (index) {
    var request = {
      query: countries[index],
      fields: ['name', 'geometry'],
    };

    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i],countryCodes[index]);
        }
      }
    });
  });
}

function createMarker(place,country) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    window.location = country;
  });
}

$('#mapText').css('display','none');
