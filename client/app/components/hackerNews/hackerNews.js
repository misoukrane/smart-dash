import angular from 'angular';
import uiRouter from 'angular-ui-router';
import hackerNewsComponent from './hackerNews.component';

let hackerNewsModule = angular.module('hackerNews', [
  uiRouter
])

.component('hackerNews', hackerNewsComponent);

export default hackerNewsModule;
