import angular from 'angular';
import myDirective from './my_directive';

let app = angular.module('playAngular');

app.directive('myDirective', myDirective);
