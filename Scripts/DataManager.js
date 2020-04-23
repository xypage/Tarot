class DataManager {
  constructor(_db) {
    this.db = _db;

    let ref = db.ref('hand');
    let data = {
      name: "Xavier",
      hand: new Deck()
    }

    ref.push(data);
  }
}