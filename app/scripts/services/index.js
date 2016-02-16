import angular from 'angular';
import NoteService from './note';

let app = angular.module('noteApp');

app.service('noteService', NoteService);
