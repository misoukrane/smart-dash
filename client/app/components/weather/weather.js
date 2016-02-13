import angular from 'angular';
import uiRouter from 'angular-ui-router';
import weatherComponent from './weather.component';

let weatherModule = angular.module('weather', [
  uiRouter
])

.component('weather', weatherComponent);

export default weatherModule;
