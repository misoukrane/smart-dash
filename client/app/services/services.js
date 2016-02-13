import angular from 'angular';
import todoService from './todoService.js';
import hackerNewsService from './hackerNewsService.js';
import openWeatherApiService from './openWeatherApiService.js';

let serviceModule = angular.module('app.services', [
  todoService.name,
  hackerNewsService.name,
  openWeatherApiService.name,
]);

export default serviceModule;
