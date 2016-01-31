import angular from 'angular';
import NoteService from './note';

let app = angular.module('playAngular');

app.service('noteService', NoteService);
