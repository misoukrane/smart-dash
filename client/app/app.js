import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import material from 'angular-material';
import 'angular-material/angular-material.css';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  material,
])

.component('app', AppComponent);
