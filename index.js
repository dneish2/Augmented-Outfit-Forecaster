//JavaScript File
//Dark Sky Api Requests

var x = document.getElementById("demo");
var coordinates = "";
var fahrenheit = "";
var globaldata;
var icon = "";

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
 fahrenheit = (data.currently.temperature * 9/5) + 32;
 condition = (data.currently.icon);

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
