import angular from 'angular';
import NoteListController from './note_list'
import NoteEditController from './note_edit'
import NoteController from './note';

let app = angular.module('noteApp');

app.controller('NoteListController', NoteListController);
app.controller('NoteEditController', NoteEditController);
app.controller('NoteController', NoteController);
