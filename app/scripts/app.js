var angular = require('angular');
require('angular-route');

var app = angular.module('playAngular', ['ngRoute']);

require('./controllers');
require('./directives');

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/play.html',
    controller: 'PlayController',
  });
});
