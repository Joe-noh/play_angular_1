export default class NoteListController {
  constructor($scope, noteService) {
    this.scope = $scope;
    this.noteService = noteService;
    this.scope.$parent.note = noteService.getNotes()[0];
  }

  getNotes() {
    return this.noteService.getNotes();
  }

  select(note) {
    this.scope.$parent.note = note;
  }

  cssClass(note) {
    if (this.scope.$parent.note == note) {
      return 'selected';
    } else {
      return '';
    }
  }
}
