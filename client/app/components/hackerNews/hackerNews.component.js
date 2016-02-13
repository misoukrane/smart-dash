import template from './hackerNews.html';
import controller from './hackerNews.controller';
import './hackerNews.styl';

let hackerNewsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'hnCtrl',
};

export default hackerNewsComponent;
