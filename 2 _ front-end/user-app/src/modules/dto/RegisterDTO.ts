// [SGLEE:20240207WED_1248]

export class RegisterDTO {
  email = "";
  pw = "";
  name = "";
  birthday = ""; // YYYY-MM-DD
  phone_number = ""; // 010-0000-0000
  license_number = ""; // 00-00-000000-00
  card_company = "";
  card_number = ""; // 0000-0000-0000-0000

  constructor(
    email = "",
    pw = "",
    name = "",
    birthday = "",
    phone_number = "",
    license_number = "",
    card_company = "",
    card_number = ""
  ) {
    this.email = email;
    this.pw = pw;
    this.name = name;
    this.birthday = birthday;
    this.phone_number = phone_number;
    this.license_number = license_number;
    this.card_company = card_company;
    this.card_number = card_number;
  }

  toString(): string {
    return (
      `${this.email} / ${this.pw} / ${this.name} / ${this.birthday}` +
      ` / ${this.phone_number} ${this.license_number}` +
      ` / ${this.card_company} / ${this.card_number}`
    );
  }
}
