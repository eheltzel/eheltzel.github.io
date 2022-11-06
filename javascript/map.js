
  var mymap = L.map('mapid').setView([0, 0], 1);

  var options = {
    key: geocoder_api_key,
    limit: 10
  };

  var control = L.Control.openCageGeocoding(options).addTo(mymap);

  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  // }).addTo(mymap);


  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
      maxZoom: 20,
      id: 'mapbox/satellite-v9',
      accessToken: mapbox_access_token,
  }).addTo(mymap);

  L.control.resetView({
        position: "topleft",
        title: "Reset view",
        latlng: L.latLng([0, 0]),
        zoom: 1,
    }).addTo(mymap);


// India's Taj Mahal
  var marker1 = L.marker([27.174961, 78.042385], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'darkblue'})
  }).addTo(mymap);

  marker1.bindPopup(
    '<h3>India\'s Taj Mahal</h3>' +
      'The Taj Mahal is an Islamic ivory-white marble mausoleum on the right ' +
      'bank of the river Yamuna in the Indian city of Agra. The Taj Mahal' +
      'attracts more than 6 million visitors a year and in 2007, it was declared' +
      'a winner of the New 7 Wonders of the World (2000–2007) initiative.' +
      '<br><img src = images/taj_mahal.jpg width=180px height=120px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Taj_Mahal'
  );

    marker1.on('click', function(e){
      mymap.setView(e.latlng, 16);
    })


// Great Wall of China
  var marker2 = L.marker([40.334245, 116.477652], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'darkred'})
  }).addTo(mymap);

  marker2.bindPopup(
    '<h3>Great Wall of China</h3>' +
      'The Great Wall of China is a series of fortifications that were built ' +
      'across the historical northern borders of ancient Chinese states and ' +
      'Imperial China as protection against various nomadic groups from the ' +
      'Eurasian Steppe. Today, the defensive system of the Great Wall is ' +
      'generally recognized as one of the most impressive architectural feats in history.' +
      '<br><img src = images/great_wall.jpg width=210px height=140px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Great_Wall_of_China');

    marker2.on('click', function(e){
      mymap.setView(e.latlng, 15);
    })


// Petra in Jordan
  var marker3 = L.marker([30.328611, 35.441944], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'red'})
  }).addTo(mymap);

  marker3.bindPopup(
    '<h3>Petra in Jordan</h3>' +
      'Petra, originally known to its inhabitants as Raqmu or Raqēmō, is a ' +
      'historic and archaeological city in southern Jordan. ' +
      'Famous for its rock-cut architecture and water conduit system, Petra is ' +
      'also called the "Rose City" because of the colour of the stone from ' +
      'which it is carved. Petra is a symbol of Jordan, as well as Jordan\'s ' +
      'most-visited tourist attraction.' +
      '<br><img src = images/petra.jpg width=160px height=200px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Petra');

    marker3.on('click', function(e){
      mymap.setView(e.latlng, 16);
    })

// Brazil's statue of Christ the Redeemer
  var marker4 = L.marker([-22.951389, -43.2108334], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'blue'})
  }).addTo(mymap);

  marker4.bindPopup(
    '<h3>Brazil\'s statue of Christ the Redeemer</h3>' +
      'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de ' +
      'Janeiro, Brazil. A symbol of Christianity around the world, the statue ' +
      'has also become a cultural icon of both Rio de Janeiro and Brazil and was ' +
      'voted one of the New Seven Wonders of the World.' +
      '<br><img src = images/christ_the_redeemer.jpg width=125px height=185px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)');

    marker4.on('click', function(e){
      mymap.setView(e.latlng, 16);
    })

// Peru's Machu Picchu
  var marker5 = L.marker([-13.163056, -72.545556], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'green'})
  }).addTo(mymap);

  marker5.bindPopup(
    '<h3>Peru\'s Machu Picchu</h3>' +
      'Machu Picchu is a 15th-century Inca citadel located in the Eastern ' +
      'Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. ' +
      'Machu Picchu was built in the classical Inca style, with polished ' +
      'dry-stone walls. Its three primary structures are the Intihuatana, the ' +
      'Temple of the Sun, and the Room of the Three Windows.' +
      '<br><img src = images/machu_picchu.jpg width=220px height=210px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Machu_Picchu');

    marker5.on('click', function(e){
      mymap.setView(e.latlng, 17);
    })

// Mexico's Chichen Itza pyramid
  var marker6 = L.marker([20.682778, -88.569167], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'purple'})
  }).addTo(mymap);

  marker6.bindPopup(
    '<h3>Mexico\'s Chichen Itza pyramid</h3>' +
      'Chichen Itza was a large pre-Columbian city built by the Maya ' +
      'people of the Terminal Classic period. The city may have had the most ' +
      'diverse population in the Maya world, a factor that could have contributed ' +
      'to the variety of architectural styles at the site. Chichen Itza is one ' +
      'of the most visited archeological sites in Mexico with over 2.6 million ' +
      'tourists in 2017.' +
      '<img src = images/chichen_itza.jpg width=320px height=170px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Chichen_Itza');

    marker6.on('click', function(e){
      mymap.setView(e.latlng, 16);
    })

// The Colosseum in Rome
  var marker7 = L.marker([41.890169,	12.492269], {
    icon: L.AwesomeMarkers.icon({icon: 'info', prefix: 'fa', markerColor: 'orange'})
  }).addTo(mymap);

  marker7.bindPopup(
    '<h3>The Colosseum in Rome</h3>' +
      'The Colosseum is an oval amphitheatre in the centre of the city of Rome,' +
      'Italy. It is the largest ancient amphitheatre ever built, and is still ' +
      'the largest standing amphitheatre in the world today.' +
      'Although substantially ruined by earthquakes and stone robbers, ' +
      'the Colosseum is still an iconic symbol of Imperial Rome and ' +
      'was listed as one of the New 7 Wonders of the World.' +
      '<img src = images/colosseum.jpg width=240px height=160px/>' +
      '<br> Source: https://en.wikipedia.org/wiki/Colosseum ');


    marker7.on('click', function(e){
      mymap.setView(e.latlng, 15);
    })


    L.control.coordinates({
    	position:"bottomleft", //optional default "bootomright"
    	decimals:2, //optional default 4
    	decimalSeperator:".", //optional default "."
    	labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
    	labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
    	enableUserInput:true, //optional default true
    	useDMS:false, //optional default false
    	useLatLngOrder: true, //ordering of labels, default false-> lng-lat
    	markerType: L.marker, //optional default L.marker
    	markerProps: {}, //optional default {},
    	labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
    	labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
    	customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
    }).addTo(mymap);


  /*var marker = L.marker([51.5, -0.09]).addTo(mymap);

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap);

  var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047]
  ]).addTo(mymap);

  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  marker.on('click', function(e){
    mymap.setView(e.latlng, 14);
  })

  circle.on('click', function(e){
    mymap.setView(e.latlng, 13);
  })

  polygon.on('click', function(e){
    mymap.setView(e.latlng, 13);
  })

  var ZoomViewer = L.Control.extend({
    onAdd: function(){
      var gauge = L.DomUtil.create('div');
      gauge.style.width = '200px';
      gauge.style.background = 'rgba(255, 255, 255, 0.5)';
      gauge.style.textAlign = 'left';
      mymap.on('zoomstart zoom zoomend', function(ev){
        gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
      })
      return gauge;
    }
  });

  (new ZoomViewer).addTo(mymap);

  mymap.setView([0, 0], 1);*/
