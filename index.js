<script>
var x = document.getElementById("demo");
var coordinates = "";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  //"<br>Longitude: " + position.coords.longitude; -->

coordinates = position.coords.latitude + "," + position.coords.longitude;}
</script>
