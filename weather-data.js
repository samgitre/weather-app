/**
 * Created by Samson on 9/3/2016.
 */
"use strict";

function Weather(cityName, description, country, humidity) {
    this.cityName = cityName;
    this.description = description;
    this.country = country;
    this.humidity = humidity;
    this._temperature = '';
}
Object.defineProperty(Weather.prototype, 'temperature',{
    get: function () {
        return this._temperature;
    },
    set : function (value) {
        this._temperature =  (value * 1.8 * 32).toFixed(2) +'F';
    }
});

