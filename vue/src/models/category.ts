export class Category {
  _id: string;
  title: string;

  constructor(_id = "", title = "") {
    this._id = _id;
    this.title = title;
  }
}
