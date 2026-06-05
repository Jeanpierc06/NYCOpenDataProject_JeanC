// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

//Function to generate Chart (accepts data, id of div for chart, and chart type)
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
} 
// MAP PART FOR MAP PAGE //

// get() returns the element using document.getElementById().

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lati,long){
  let location = [lati, long];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 18);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map

}

