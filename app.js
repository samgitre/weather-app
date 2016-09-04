/**
 * Created by Samson on 9/3/2016.
 */
 "use strict";

searchButton.addEventListener('click', getWeather);

function getWeather() {
    var cityName = cityname.value;

    if(cityName.trim().length==0){
     return alert('Oops! something went wrong city name must be string');
    }
    var http = new XMLHttpRequest();
    var appKey = '8aa4c2116f94cb76a13dd75c5a75e515';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + appKey;
    var method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function () {
        if(http.readyState == XMLHttpRequest.DONE && http.status === 200){
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description);
             weatherData.temperature = data.main.temp;
            weatherData.humidity = data.main.humidity;
            weatherData.country = data.sys.country;

               updateWeather(weatherData);
             console.log(weatherData);

        }  else if(http.readyState == XMLHttpRequest.DONE){
            return alert('Oops! something went wrong');
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription .textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    weatherCountry.textContent = weatherData.country;
    humidity.textContent = weatherData.humidity;

    weatherBox.style.display = 'block';
}

