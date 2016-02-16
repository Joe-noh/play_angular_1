import angular from 'angular';
import myDirective from './my_directive';

let app = angular.module('noteApp');

app.directive('myDirective', myDirective);
