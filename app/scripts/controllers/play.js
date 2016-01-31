export default class PlayController {
  constructor(noteService) {
    this.person = {
      firstName: "John",
      lastName:  "Doe",
      fullName: () => {
        return `${this.person.firstName} ${this.person.lastName}`;
      }
    };

    this.numbers = [1, 2, 4, 8, 16];

    this.notes = noteService.getNotes();

    this.$inject = ['noteService'];
  }
}
