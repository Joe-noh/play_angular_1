export default class NoteService {
  getNotes() {
    return [
      {
        title: "今日の予定",
        body: "買い物に行きます"
      },
      {
        title: "今後の予定",
        body: `
        1. Angular2について調査
        2. Angular2でなにか作ってみる
        3. バックエンドとWebSocketで通信する
        `
      }
    ];
  }

  constructor() {
  }
};
