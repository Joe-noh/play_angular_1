import angular from 'angular';
import NoteListController from './note_list'
import NoteController from './note';

let app = angular.module('noteApp');

app.controller('NoteListController', NoteListController);
app.controller('NoteController', NoteController);
