import template from './todo.html';
import controller from './todo.controller';
import './todo.styl';

let todoComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'todoCtrl',
};

export default todoComponent;
