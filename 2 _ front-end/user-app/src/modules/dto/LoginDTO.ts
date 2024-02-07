export default class LoginDTO {
  email = "";
  pw = "";

  constructor(email = "", pw = "") {
    this.email = email;
    this.pw = pw;
  }

  toString() {
    return `${this.email} / ${this.pw}`;
  }
}
