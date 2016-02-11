import angular from 'angular';

let todoServiceModule = angular.module('todo.service', [])

.service('todoService', function() {
  var items = [];

  this.list = function(filter) {
    switch (filter) {
      case 'all':
        return this.listAll();
        break;
      case 'completed':
        return this.listDone();
        break;
      case 'active':
        return this.listUndone();
        break;
    }
  };

  this.listUndone = function() {
    return items.filter((item) => {
      return !item.done;
    });
  };

  this.listDone = function() {
    return items.filter((item) => {
      return item.done;
    });
  };

  this.listAll = function() {
    return items;
  };

  this.add = function(itemText, filter) {
    var item = {name: itemText, done: filter === 'completed'};
    items.push(item);
  };

  this.toggle = function(item) {
    item.done = !item.done;
  };

  this.update = function(item, newName) {
    item.name = newName;
  };
});

export default todoServiceModule;
