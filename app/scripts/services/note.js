export default class NoteService {
  constructor() {
    this.notes = [
      {
        title: "今日の予定",
        body: "買い物に行きます"
      },
      {
        title: "今後の予定",
        body:
          '1. Angular2について調査\n' +
          '2. Angular2でなにか作ってみる\n' +
          '3. バックエンドとWebSocketで通信する'
      }
    ];
  }

  getNotes() {
    return this.notes;
  }

  build() {
    return {title: '', body: ''};
  }

  insert(note) {
    this.notes.push(note);
  }
};
