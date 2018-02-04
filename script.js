var farTemp, celTemp;
var lat, long;


// output temperautre in F
function fTemp() {
	document.getElementById("temp").innerHTML = farTemp + "°F";
} // close fTemp
// output temperature in Celsius
function cTemp() {
	document.getElementById("temp").innerHTML = celTemp + "°C";
} // close cTemp

// get location from geolocator
$(document).ready(function() {
  if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
		  // set variables to obtained location from above
			lat = position.coords.latitude;
			long = position.coords.longitude;
			// set JSON data to location variables, "lat" and "long" after converting to string for URL
			$.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + String(lat) + "&lon=" + String(long), function(json) {
			  // temp variables and conversion rounded to nearest whole number
				farTemp = Math.floor(json.main.temp * 1.8 + 32);
				celTemp = JSON.stringify(Math.floor(json.main.temp));
				// output data
				document.getElementById("location").innerHTML = json.name;
				document.getElementById("temp").innerHTML = farTemp + "°F";
				document.getElementById("weather").innerHTML = json.weather[0].description;
				document.getElementById("icon").src = (json.weather[0].icon);
      }); // close getJSON
		}); // close getLocation
  } // close if statement
}); // close document ready