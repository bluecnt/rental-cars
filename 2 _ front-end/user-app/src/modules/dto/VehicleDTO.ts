// [SGLEE:20240214WED_114400] Created

export class VehicleDTO {
  vehicle_id = -1;
  //
  reg_date = new Date();
  name = "";
  img = "";
  plate_number = "";
  options = "";
  price_per_hour = 0;
  price_per_km = 0;
  desc = "";
  //
  remark = "";

  constructor(
    vehicle_id = -1,
    reg_date = new Date(),
    name = "",
    img = "",
    plate_number = "",
    options = "",
    price_per_hour = 0,
    price_per_km = 0,
    desc = "",
    remark = ""
  ) {
    this.vehicle_id = vehicle_id;
    //
    this.reg_date = reg_date;
    this.name = name;
    this.img = img;
    this.plate_number = plate_number;
    this.options = options;
    this.price_per_hour = price_per_hour;
    this.price_per_km = price_per_km;
    this.desc = desc;
    //
    this.remark = remark;
  }

  toStirng(): string {
    return (
      `${this.vehicle_id} / ${this.reg_date} / ${this.name} / ${this.img} /` +
      `${this.plate_number} / ${this.options} / ${this.price_per_hour} / ${this.price_per_km} /` +
      `${this.desc} / ${this.remark}`
    );
  }
}
