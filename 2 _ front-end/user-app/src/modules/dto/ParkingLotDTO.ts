// [SGLEE:20240214WED_113600] Created

import { VehicleDTO } from "./VehicleDTO";

export class ParkingLotsDTO {
  pl_id = -1;
  //
  reg_date = new Date();
  name = "";
  address = "";
  latitude = 0.0; // 위도 (y)
  longitude = 0.0; // 경도 (x)
  desc = "";
  //
  remark = "";
  //
  vehicles: VehicleDTO[] = [];

  constructor(
    pl_id = -1,
    reg_date = new Date(),
    name = "",
    address = "",
    latitude = 0.0,
    longitude = 0.0,
    desc = "",
    remark = "",
    //
    vehicles: VehicleDTO[] = []
  ) {
    this.pl_id = pl_id;
    //
    this.reg_date = reg_date;
    this.name = name;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.desc = desc;
    //
    this.remark = remark;
    //
    this.vehicles = vehicles;
  }

  toString(): string {
    return (
      `${this.pl_id} / ${this.reg_date} / ${this.name} / ${this.address} /` +
      `${this.latitude} / ${this.longitude} / ${this.desc} / ${this.remark}`
    );
  }
}
