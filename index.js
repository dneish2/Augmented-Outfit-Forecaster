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

}

let myData = {
  level: 1,
  extra: 2
};

let myData_serialized = JSON.stringify(myData);
console.log(myData_serialized);

localStorage.setItem("myData", myData_serialized);
console.log(localStorage);
