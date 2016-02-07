export default class NoteController {
  constructor(noteService) {
    this.note = noteService.getNotes()[0];
  }
};
