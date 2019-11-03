//JavaScript File
//Dark Sky Api Requests
//File Write Require

var x = document.getElementById("demo");
var coordinates = "";
var fahrenheit = "";
var globaldata;
var condition = "";
var level = 0;
var extra = 0;


function getLocation() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(showPosition);
 } else {
   x.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function showPosition(position) {
 // x.innerHTML = "Latitude: " + position.coords.latitude +
 // "<br>Longitude: " + position.coords.longitude; -->
coordinates = position.coords.latitude + "," + position.coords.longitude;

const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}https://api.darksky.net/forecast/c9eff229d9e3b4b0f65ce1f916ee8145/${coordinates}`;

fetch (api)
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
  globaldata=data;
  getOutfit(globaldata);
});
}

function getOutfit(data) {
  //Declare variables and states
 fahrenheit = (data.currently.temperature);
 condition = (data.currently.icon);

//Current Time's Logistics
 if (fahrenheit >= 70)
 {
   level = 3;
 }
 else if (fahrenheit >= 64 && fahrenheit <= 69)
 {
   level = 2;
 }
 else {
   level = 1;
 }

if (condition == 'rain' || condition == 'snow' || condition == 'sleet' || condition == 'hail')
{
  extra = 1;
}
<script>
const fs = require('fs');

let file = "User Level Is: " + level +"\n" + "User Extra : " + extra;

// Write data in 'Output.txt' .
fs.writeFile('Clothes.txt', file, (err) => {

    // In case of a error throw err.
    if (err) throw err;
})
</script>

}


  //Declare Temperature Ranges For internal use
  //if (fahrenheit )




//// API FETCHING
/*
let fetch = require('node-fetch');

//let darksky = 'https://api.darksky.net/forecast/c9eff229d9e3b4b0f65ce1f916ee8145/';

let uri = darksky + '/' + coordinates;
console.log(uri);

let options = {
  method: 'GET'.
  mode: 'cors'
}

let req = new fetch.Request(uri, options);

fetch(req)
  .then((response)=>{
    if(response.ok){
      return response.json();
    }else{
      throw new Error('BAD HTTP DUDE!')

    }
    }
  })
  .then (j) =>{
    console.log('JSON data provided');
  })
  */
