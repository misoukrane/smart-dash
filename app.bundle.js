webpackJsonp([0],[function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=t(1),o=n(i),a=t(3),r=n(a),l=t(4),s=n(l),d=t(13),u=n(d),c=t(46),f=n(c),m=t(50),p=n(m),h=t(54),v=n(h);t(58),t(60),t(62),t(64),o["default"].module("app",[r["default"],s["default"].name,u["default"].name,f["default"].name,v["default"]]).component("app",p["default"])},,,,function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(5),r=n(a),l=o["default"].module("app.common",[r["default"].name]);exports["default"]=l,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(3),r=n(a),l=t(6),s=n(l),d=o["default"].module("navbar",[r["default"]]).component("navbar",s["default"]);exports["default"]=d,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(7),o=n(i),a=t(8),r=n(a);t(9);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<md-toolbar>\n  <div class="md-toolbar-tools">\n    <md-button class="md-icon-button" aria-label="Settings" ui-sref="home">\n      <md-icon md-font-icon="material-icons">menu</md-icon>\n    </md-button>\n    <h2>\n      <a ui-sref="home"><span>Smart Dash</span></a>\n    </h2>\n    <span flex></span>\n    <md-button class="md-raised" ui-sref="about">About</md-button>\n  </div>\n</md-toolbar>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function i(){t(this,i),this.name="navbar"};exports["default"]=n,e.exports=exports["default"]},function(e,exports,t){var n=t(10);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,"",""])},,,function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(14),r=n(a),l=t(20),s=n(l),d=t(26),u=n(d),c=t(32),f=n(c),m=t(40),p=n(m),h=o["default"].module("app.components",[u["default"].name,r["default"].name,f["default"].name,s["default"].name,p["default"].name]);exports["default"]=h,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(3),r=n(a),l=t(15),s=n(l),d=o["default"].module("about",[r["default"]]).config(["$stateProvider",function(e){"ngInject";e.state("about",{url:"/about",template:"<about></about>"})}]).component("about",s["default"]);exports["default"]=d,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(16),o=n(i),a=t(17),r=n(a);t(18);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<div layout="row" class="about-container">\n  <div flex="100">\n    <h1 class="md-display-2 text-center">About { Smart Dash }</h1>\n    <p class="md-body-1 text-center">I am building this app just to test my abilities with AngularJs.</p>\n  </div>\n</div>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function i(){t(this,i),this.name="about"};exports["default"]=n,e.exports=exports["default"]},function(e,exports,t){var n=t(19);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,".about-container{margin:1% auto;max-width:960px}",""])},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(3),r=n(a),l=t(21),s=n(l),d=o["default"].module("hackerNews",[r["default"]]).component("hackerNews",s["default"]);exports["default"]=d,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(22),o=n(i),a=t(23),r=n(a);t(24);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"hnCtrl"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<div layout="column" layout-padding class="hn">\n  <h1 class="margin-less md-display-1 text-center">\n    {{ hnCtrl.title }}\n    <a class="material-icons hn-reload" ng-hide="hnCtrl.items.length === 0" ng-click="hnCtrl.reload()" href="javascript:void(0)">cached</a>\n  </h1>\n  <md-progress-circular ng-hide="hnCtrl.items.length !== 0" class="hn-spinner" md-mode="indeterminate"></md-progress-circular>\n  <ul class="hn-list">\n    <li class="hn-list-item" ng-repeat="item in hnCtrl.items | orderBy:\'score\':true">\n      <span class="rounded hn-list-item-score">{{ item.score }}</span>\n      <a class="hn-list-item-link" target="_blank" href="{{item.url}}">\n          {{ item.title | limitTo:42}}\n        </a>\n      <span ng-show="item.title.length > 42">...</span>\n    </li>\n  </ul>\n</div>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(n){"ngInject";t(this,e),this.title="Hacker News",this.hackerNewsService=n,this.loadItems(),this.items=[]}return e.$inject=["hackerNews"],n(e,[{key:"loadItems",value:function(){var e=this;this.hackerNewsService.getTopItems().then(function(t){var n=t.data.slice(0,10);angular.forEach(n,function(t,n){e.hackerNewsService.getItem(t).then(function(t){e.items.push(t.data)})})})}},{key:"reload",value:function(){this.items=[],this.loadItems()}}]),e}();exports["default"]=i,e.exports=exports["default"]},function(e,exports,t){var n=t(25);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,".hn{border-radius:4px;border:1px solid #000;min-height:468px}.hn-reload{text-decoration:none}.hn-spinner{left:43%}.hn-spinner.ng-hide-add{animation:fadeOut .2s}.hn-spinner.ng-hide-remove{animation:fadeIn .2s}.hn-list{list-style:none;margin-top:0}.hn-list-item{margin:4% 0}.hn-list-item-score{color:#fff;background-color:#f60;padding:1%;border-radius:50%}.hn-list-item-link{font-size:90%;text-decoration:none}.hn-list-item-link:visited{text-decoration:none;color:#00e}",""])},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(3),r=n(a),l=t(27),s=n(l),d=o["default"].module("home",[r["default"]]).config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";t.otherwise("/"),e.state("home",{url:"/",template:"<home></home>"})}]).component("home",s["default"]);exports["default"]=d,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(28),o=n(i),a=t(29),r=n(a);t(30);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<div layout="row" layout-xs="column" layout-wrap layout-margin layout-fill>\n  <div flex flex-sm="100" flex-xs="100"><todo></todo></div>\n  <div flex flex-sm="100" flex-xs="100"><hacker-news></hacker-news></div>\n  <div flex flex-sm="100" flex-xs="100"><weather></weather></div>\n</div>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=["$mdIcon",function i(e){t(this,i),this.name="home"}];exports["default"]=n,e.exports=exports["default"]},function(e,exports,t){var n=t(31);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,"",""])},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(33),r=n(a),l=t(3),s=n(l),d=t(35),u=n(d),c=o["default"].module("todo",[s["default"],r["default"]]).component("todo",u["default"]);exports["default"]=c,e.exports=exports["default"]},,,function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(36),o=n(i),a=t(37),r=n(a);t(38);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"todoCtrl"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<div layout="column" layout-padding class="todo">\n  <h1 class="margin-less md-display-1 text-center">Todo List</h1>\n   <md-radio-group style="text-align: center" ng-model="todoCtrl.filter">\n      <md-radio-button value="active" class="md-primary inline">Active</md-radio-button>\n      <md-radio-button value="completed" class="md-primary inline"> Completed </md-radio-button>\n      <md-radio-button value="all" class="md-primary inline"> All </md-radio-button>\n   </md-radio-group>\n   <div class="todo-items-holder">\n    <div class="todo-item" ng-repeat="todoItem in todoCtrl.todoService.list(todoCtrl.filter)" layout="row">\n      <div flex="85" ng-class="{strike: todoItem.done}" ng-bind="todoItem.name"></div>\n      <div flex="15">\n        <a href="javascript:void(0)" ng-click="todoCtrl.toggle(todoItem)" class="material-icons todo-action check">check</a>\n        <a href="javascript:void(0)" ng-click="todoCtrl.edit(todoItem)" ng-hide="todoItem.done" class="material-icons todo-action edit">edit</a>\n      </div>\n    </div>\n   </div>\n  <form layout="row" name="todoCtrl.todoForm" class="todo-form" ng-submit="todoCtrl.submit()" >\n    <div flex="80">\n      <md-input-container class="md-block">\n        <label>Todo Item</label>\n        <input ng-model="todoCtrl.itemName" required>\n      </md-input-container>\n    </div>\n    <div flex="20">\n      <md-button  type="submit" class="md-fab md-primary md-button md-ink-ripple" ng-disabled="todoCtrl.todoForm.$invalid" ng-click="todoCtrl.submit()">\n        <md-icon ng-hide="todoCtrl.editing" class="material-icons">add</md-icon>\n        <md-icon ng-hide="!todoCtrl.editing" class="material-icons">edit</md-icon>\n      </md-button>\n    </div>\n  </div>\n</div>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(n){"ngInject";t(this,e),this.todoService=n,this.filter="active",this.editing=!1,this.itemToUpdate=null,this.itemName=""}return e.$inject=["todoService"],n(e,[{key:"addItem",value:function(){this.todoService.add(this.itemName,this.filter),this.clearForm()}},{key:"toggle",value:function(e){this.todoService.toggle(e)}},{key:"edit",value:function(e){this.editing=!0,this.itemToUpdate=e,console.log(e),this.itemName=this.itemToUpdate.name}},{key:"updateItem",value:function(){this.todoService.update(this.itemToUpdate,this.itemName),this.editing=!1,this.itemToUpdate=null,this.clearForm()}},{key:"submit",value:function(){this.editing?this.updateItem():this.addItem()}},{key:"clearForm",value:function(){this.itemName="",this.todoForm.$setPristine(),this.todoForm.$setUntouched()}}]),e}();exports["default"]=i,e.exports=exports["default"]},function(e,exports,t){var n=t(39);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,".todo{border-radius:4px;border:1px solid #000}.todo-items-holder{min-height:200px;max-height:200px;overflow-y:auto}.todo-item{padding:0 0 1%!important;margin-left:1%}.todo-item.ng-enter{animation:bounceInLeft .4s}.todo-item.ng-leave{animation:bounceOutRight .4s}.todo-action{text-decoration:none}.todo-action.check{color:#43a047}.todo-action.edit{color:#ff8f00}",""])},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(3),r=n(a),l=t(41),s=n(l),d=o["default"].module("weather",[r["default"]]).component("weather",s["default"]);exports["default"]=d,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(42),o=n(i),a=t(43),r=n(a);t(44);var l={restrict:"E",bindings:{},template:o["default"],controller:r["default"],controllerAs:"weatherCtrl"};exports["default"]=l,e.exports=exports["default"]},function(e,exports){e.exports='<div layout="column" layout-padding class="hn">\n  <h1 class="margin-less md-display-1 text-center">{{ weatherCtrl.title }}</h1>\n  <md-input-container>\n    <label>City</label>\n    <md-select ng-model="weatherCtrl.city">\n      <md-option ng-repeat="city in weatherCtrl.cities" value="{{city.id}}">\n        {{city.name}}\n      </md-option>\n    </md-select>\n  </md-input-container>\n  <md-progress-circular ng-hide="weatherCtrl.loading === false" class="weather-spinner" md-mode="indeterminate"></md-progress-circular>\n  <br>\n  <div ng-if="weatherCtrl.loading === false">\n    <div>\n      <div layout="row">\n        <div flex="70" class="text-center"><span class="margin-less md-display-1">{{weatherCtrl.cityFullName}}</span></div>\n        <div flex="30"><img ng-src={{weatherCtrl.getImageSource()}} /></div>\n      </div>\n      <h6 class="text-center md-display-subhead margin-less">{{weatherCtrl.weather[0].description}}</h6>\n      <h6 class="text-center md-display-1 margin-less">{{weatherCtrl.mainWeather.temp}}&#8451;</h6>\n      <br>\n      <div layout="row">\n        <div flex="33">\n          <div layout="row">\n            <div flex="50"><img class="weather-icon" src="weather-icons/Wind.svg"></div>\n            <div flex="50">\n              <span class="md-body-2">\n                {{weatherCtrl.wind.speed}} mPh\n              </span>\n            </div>\n          </div>\n        </div>\n        <div flex="33">\n          <div layout="row">\n            <div flex="50"><img class="weather-icon" src="weather-icons/Compass-North.svg"></div>\n            <div flex="50">\n              <span class="md-body-2">\n                {{weatherCtrl.mainWeather.humidity}}%\n              </span>\n            </div>\n          </div>\n        </div>\n        <div flex="33">\n          <div layout="row">\n            <div flex="50"><img class="weather-icon" src="weather-icons/Thermometer-100.svg"></div>\n            <div flex="50">\n              <span class="md-body-2">\n                {{weatherCtrl.mainWeather.temp_max}} &#8451;\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'},function(e,exports){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=function(){function e(n){"ngInject";t(this,e);var i=4460162;this.title="Weather",this.service=n,this.cities=n.getCities(),this.city=i,this.cityFullName="Chapel Hill, NC",this.loading=!0,this.unitSystem="metric",this.reload()}return e.$inject=["openWeatherApi"],n(e,[{key:"reload",value:function(){var e=this,t=this;t.loading=!0,this.service.getCurrentWeather(this.city,this.unitSystem).then(function(n){t.loading=!1,e.weather=n.data.weather,e.mainWeather=n.data.main,e.wind=n.data.wind,e.rain=n.data.rain})}},{key:"getImageSource",value:function(){return this.service.getImageSource(this.weather[0].icon)}}]),e}();exports["default"]=i,e.exports=exports["default"]},function(e,exports,t){var n=t(45);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,".weather{border-radius:4px;border:1px solid #000;min-height:468px}.weather-spinner{left:43%}.weather-icon{margin-top:-33%;width:110%}",""])},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=t(47),r=n(a),l=t(48),s=n(l),d=t(49),u=n(d),c=o["default"].module("app.services",[r["default"].name,s["default"].name,u["default"].name]);exports["default"]=c,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=o["default"].module("todo.service",[]).service("todoService",function(){var e=[];this.list=function(e){switch(e){case"all":return this.listAll();case"completed":return this.listDone();case"active":return this.listUndone()}},this.listUndone=function(){return e.filter(function(e){return!e.done})},this.listDone=function(){return e.filter(function(e){return e.done})},this.listAll=function(){return e},this.add=function(t,n){var i={name:t,done:"completed"===n};e.push(i)},this.toggle=function(e){e.done=!e.done},this.update=function(e,t){e.name=t}});exports["default"]=a,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=o["default"].module("hackerNews.service",[]).service("hackerNews",["$http",function(e){"ngInject";var t="https://hacker-news.firebaseio.com/v0";this.getTopItems=function(){return e.get(t+"/topstories.json")},this.getItem=function(n){return e.get(t+"/item/"+n+".json")}}]);exports["default"]=a,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(1),o=n(i),a=o["default"].module("openWeatherApi.service",[]).service("openWeatherApi",["$http",function(e){"ngInject";var t="921b6a4260a1a3df20df46feee4b4d5b",n="http://api.openweathermap.org/",i=n+"img/w/",o=n+"data/2.5/weather?appid="+t;this.getCities=function(){return[{name:"Chapel Hill",id:4460162,fullName:"Chapel Hill, NC"}]},this.getCurrentWeather=function(t,n){return e.get(o+"&id="+t+"&units="+n)},this.getImageSource=function(e){return i+e+".png"}}]);exports["default"]=a,e.exports=exports["default"]},function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var i=t(51),o=n(i);t(52);var a={template:o["default"],restrict:"E"};exports["default"]=a,e.exports=exports["default"]},function(e,exports){e.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\n<div class="app">\n  <md-content>\n    <navbar></navbar>\n    <div ui-view></div>\n  </md-content>\n</div>\n'},function(e,exports,t){var n=t(53);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,"",""])},,,,,,,,,,,function(e,exports,t){var n=t(65);"string"==typeof n&&(n=[[e.id,n,""]]);t(12)(n,{});n.locals&&(e.exports=n.locals)},function(e,exports,t){exports=e.exports=t(11)(),exports.push([e.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),exports.push([e.id,".material-icons.md-18{font-size:18px}.material-icons.md-24{font-size:24px}.material-icons.md-36{font-size:36px}.material-icons.md-48{font-size:48px}.material-icons.md-dark{color:rgba(0,0,0,.54)}.material-icons.md-dark.md-inactive{color:rgba(0,0,0,.26)}.material-icons.md-light{color:#fff}.material-icons.md-light.md-inactive{color:hsla(0,0%,100%,.3)}.inline{display:inline-block}.margin-less{margin:0}.strike{text-decoration:line-through}.text-center{text-align:center}",""])}]);
//# sourceMappingURL=app.bundle.js.map