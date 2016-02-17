import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import material from 'angular-material';
import 'normalize.css';
import 'angular-material/angular-material.css';
import 'animate.css';
import './common/common.styl';

angular.module('app', [
  uiRouter,
  Common.name,
  Components.name,
  Services.name,
  material,
])

.component('app', AppComponent);
