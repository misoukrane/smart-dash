import angular from 'angular';
import todoService from './todoService.js';
import hackerNewsService from './hackerNewsService.js';

let serviceModule = angular.module('app.services', [
  todoService.name,
  hackerNewsService.name,
]);

export default serviceModule;
