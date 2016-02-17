import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import todoComponent from './todo.component';

let todoModule = angular.module('todo', [
  uiRouter,
  ngAnimate,
])

.component('todo', todoComponent);

export default todoModule;
