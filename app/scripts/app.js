import angular from 'angular';
import _ngRoute from 'angular-route';

let app = angular.module('noteApp', ['ngRoute']);

require('./controllers');
require('./directives');
require('./services');

app.config(($routeProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'views/note.html',
    controller: 'NoteController'
  });
});
