class PlayController {
  constructor() {
    this.person = {
      firstName: "John",
      lastName:  "Doe",
      fullName: () => {
        return `${this.person.firstName} ${this.person.lastName}`;
      }
    };

    this.numbers = [1, 2, 4, 8, 16];
  }
}

export default PlayController;
