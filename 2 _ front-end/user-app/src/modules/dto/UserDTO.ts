// [SGLEE:20240221WED_175900] Created

export default class UserDTO {
  cust_id: number;
  //
  join_date: Date;
  user_email: string;
  name: string;
  birthday: Date;
  phone_number: string;
  license_number: string;
  credit_card_company: string;
  credit_card_number: string;
  point: number;
  accept: boolean;
  sso_login: boolean;
  //
  remark: string;
  //
  msgFromServer: string;

  constructor(
    cust_id = -1,
    //
    join_date = new Date(),
    user_email = "",
    name = "",
    birthday = new Date(),
    phone_number = "",
    license_number = "",
    credit_card_company = "",
    credit_card_number = "",
    point = 0,
    accept = false,
    sso_login = false,
    //
    remark = "",
    //
    msgFromServer = ""
  ) {
    this.cust_id = cust_id;
    //
    this.join_date = join_date;
    this.user_email = user_email;
    this.name = name;
    this.birthday = birthday;
    this.phone_number = phone_number;
    this.license_number = license_number;
    this.credit_card_company = credit_card_company;
    this.credit_card_number = credit_card_number;
    this.point = point;
    this.accept = accept;
    this.sso_login = sso_login;
    //
    this.remark = remark;
    //
    this.msgFromServer = msgFromServer;
  }

  toString(): string {
    return (
      `${this.cust_id} / ` +
      `${this.join_date} / ${this.user_email} / ${this.name} / ${this.birthday} / ` +
      `${this.phone_number} / ${this.license_number} / ${this.credit_card_company} /` +
      `${this.credit_card_number} / ${this.point} / ${this.accept} / ${this.sso_login} /` +
      `${this.remark} / ${this.msgFromServer}`
    );
  }
}
