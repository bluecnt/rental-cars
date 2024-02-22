// [SGLEE:20240222THU_153100] Created

export default class ReservationDTO {
  rent_id: number;
  vehicle_img: string;
  vehicle_name: string;
  vehicle_start_time: Date;
  vehicle_end_time: Date;
  // (0) 운행 전, (1) 운행 중, (2) 운행 종료
  vehicle_driving_status: number;

  constructor(
    rent_id = -1,
    vehicle_img = "",
    vehicle_name = "",
    vehicle_start_time = new Date(),
    vehicle_end_time = new Date(),
    vehicle_driving_status = -1
  ) {
    this.rent_id = rent_id;
    this.vehicle_img = vehicle_img;
    this.vehicle_name = vehicle_name;
    this.vehicle_start_time = vehicle_start_time;
    this.vehicle_end_time = vehicle_end_time;
    this.vehicle_driving_status = vehicle_driving_status;
  }
}
