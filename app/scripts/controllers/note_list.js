export default class NoteListController {
  constructor($scope, noteService) {
    this.scope = $scope;
    this.notes = noteService.getNotes();
    this.select(this.notes[0]);
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
