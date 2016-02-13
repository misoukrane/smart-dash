import angular from 'angular';

let openWeatherApiServiceModule = angular.module('openWeatherApi.service', [])

.service('openWeatherApi', function($http) {
  'ngInject';
  var API_ID = '921b6a4260a1a3df20df46feee4b4d5b';
  var BASE_URL = 'http://api.openweathermap.org/';
  var IMAGE_URL = BASE_URL + 'img/w/';
  var WEATHER_URL = BASE_URL + 'data/2.5/weather?appid=' + API_ID;

  this.getCities = () => {
    return [{name: 'Chapel Hill', id: 4460162, fullName: 'Chapel Hill, NC'}];
  };

  this.getCurrentWeather = (cityId, units) => {
    return $http.get(WEATHER_URL + '&id=' + cityId + '&units=' + units);
  };

  this.getImageSource = (imgId) => {
    return IMAGE_URL + imgId + '.png';
  }
});

export default openWeatherApiServiceModule;
