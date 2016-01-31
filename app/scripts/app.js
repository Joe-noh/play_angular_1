import angular from 'angular';
import _ngRoute from 'angular-route';

let app = angular.module('playAngular', ['ngRoute']);

require('./controllers');
require('./directives');
require('./services');

app.config(($routeProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'views/play.html',
    controller: 'PlayController',
  });
});
