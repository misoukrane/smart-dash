import angular from 'angular';

let hackerNewsServiceModule = angular.module('hackerNews.service', [])

.service('hackerNews', function($http) {
  'ngInject';
  var BASE_URL = 'https://hacker-news.firebaseio.com/v0';

  this.getTopItems = () => {
    return $http.get(BASE_URL + '/topstories.json');
  };

  this.getItem = (itemNumber) => {
    return $http.get(BASE_URL + '/item/' + itemNumber + '.json');
  };
});

export default hackerNewsServiceModule;
