export default class NoteEditController {
  constructor($scope, noteService) {
    this.scope = $scope;
    this.noteService = noteService;
    this.editMode = false;
    this.creatingNewOne = false;
  }

  create() {
    this.scope.$parent.note = this.noteService.build();
    this.editMode = true;
    this.creatingNewOne = true;
  }

  edit() {
    this.editMode = true;
  }

  save() {
    if (this.creatingNewOne) {
      this.noteService.insert(this.scope.$parent.note);
    }
    this.editMode = false;
    this.creatingNewOne = false;
  }

  cssClass(note) {
    if (this.scope.$parent.note == note) {
      return 'selected';
    } else {
      return '';
    }
  }
}
