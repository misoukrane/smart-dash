import angular from 'angular';
import todoService from './todoService.js';

let serviceModule = angular.module('app.services', [
  todoService.name,
]);

export default serviceModule;
