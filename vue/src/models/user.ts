export class User {
  _id: string;
  email: string;
  isAdmin: boolean;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;

  constructor(
    _id = "",
    email = "",
    isAdmin = false,
    name = "",
    image = "",
    createdAt = "",
    updatedAt = ""
  ) {
    this._id = _id;
    this.email = email;
    this.isAdmin = isAdmin;
    this.name = name;
    this.image = image;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
