// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([31.046051, 34.851612], 2);

// Get data from country_lat_lan.js
let data = country_lat_lan;

// Loop through the cities array and create one marker for each city.
data.forEach(function(country) {
    // console.log(country)
    L.circleMarker(country.location,{
        radius: country.people_fully_vaccinated/10000000,
        color : getColor(country.people_fully_vaccinated),
        stroke: true,
        weight: 0.5,
        opacity: 1,
        fillOpacity: 0.75,
    },
    )
    .bindPopup("<h2>"+ country.country_name+ "</h2> <hr> <h3> People Fully vaccinated :" + country.people_fully_vaccinated.toLocaleString() + "</h3>")
    .addTo(map);

 })

 // This function determines the color of the marker based on people fully vaccinated
 function getColor(people_fully_vaccinated) {
    console.log("inside getColor");
    if (people_fully_vaccinated > 1000000000) {
      return "#008000" ;
    }
    if (people_fully_vaccinated> 100000000) {
      return "#00FF00" ;
    }
    if (people_fully_vaccinated> 10000000) {
      return "#FF4500";
    }
    if (people_fully_vaccinated > 1000000) {
      return "#FF8C00";
    }
    if (people_fully_vaccinated > 100000) {
      return "#0000FF";
    }
    return "#000080";
  } 
    
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Here we create a legend control object.
let legend = L.control({
    position: "bottomright"
  });
  
  // Then add all the details for the legend
  legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
  
    const people_fully_vaccinated = [100000, 1000000, 10000000, 100000000, 100000000, 1000000000];
    const colors = [
      "#000080",
      "#0000FF",
      "#FF4500",
      "#FF7F50",
      "#00FF00",
      "#008000"
    ];

    // Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < people_fully_vaccinated.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      people_fully_vaccinated[i] + (people_fully_vaccinated[i + 1] ? "&ndash;" + people_fully_vaccinated[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Finally, we our legend to the map.
  legend.addTo(map);