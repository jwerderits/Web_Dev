//Declare Variables
var lat, long, tempF, tempC, windSpeed, humidity, feelsLike, weatherType;
var url = "http://api.apixu.com/v1/current.json?key=16821e99e12c419283b150632162512&q="
var keywords = {
    'Clear': ['clear', 'sunny'],
    'Cloudy': ['fog', 'overcast', 'cloudy', 'mist', 'fog'],
    'Rainy': ['rain', 'shower', 'drizzle'],
    'Snowy': ['snow', 'blizzard', 'sleet']
  };
var backgroundImages = {
	"Clear": "http://www.hdwallpapers.in/walls/sunny_bright_day-wide.jpg",
	"Cloudy": "http://edenrwatt.com/wp-content/uploads/2012/11/Stormy-Day-in-Toronto.jpg",	
	"Rainy" : "http://www.cultivatingculture.com/wp-content/uploads/2013/07/shutterstock_90261658.jpg",
	"Snowy"	: "http://cdn.wallpapersafari.com/81/86/UEnhOv.jpg"
}
var backgroundIcons = {
	"Clear": "fa-sun-o",
	"Cloudy": "fa-cloud",
	"Rainy": "fa-umbrella",
	"Snowy": "fa-snowflake-o"
}


function generateWeather() {
	var p1 = new Promise(function(resolve){
		function generateLocation() {
			//Updates the gobal variables for location
			$.ajax({
				url:" http://geoip.nekudo.com/api/",
				dataType: "json",
				success: function(place) {
					//console.log("step2");
					lat = place.location.latitude;
					long = place.location.longitude;
					resolve();
				}
			});
		}
		generateLocation();
	});

	
	p1.then(function(){
		//Uses location variables to gather and store weather data
		url = url + lat + "," + long;
		$.ajax({
			url: url,
			dataType: "json",
			type: "GET",
			cache: true,
			jsonp: false,
			success: function(data) {
				if (data) {
					tempC = data.current.temp_c;
					tempF	= data.current.temp_f;
					windSpeed = data.current.wind_mph;
					humidity = data.current.humidity;
					feelsLike = data.current.feelslike_f;
					weatherType = data.current.condition.text.toLowerCase();
				}
			}
		})
		.then(function(){
			//Simplifies weather to one of four weatherTypes
			for (var i in keywords) {
				for (var j = 0; j < keywords[i].length; j++) {
					if (weatherType.includes(keywords[i][j])) {
						weatherType = i;
					}
				}
			}
			
			//Displays appropriate images and weather data
			$("body").css("background-image","url(" + backgroundImages[weatherType] + ")");
			$("h2").append(tempF + " F");
			$("h4").append(weatherType);
			$(".fa").addClass(backgroundIcons[weatherType]);
			$("#feels").append(feelsLike + " F");
			$("#wind").append(windSpeed + " MPH");
			$("#humid").append(humidity + " %");
	});
	});
};

	
	
$(document).ready(function(){	
		generateWeather();
});