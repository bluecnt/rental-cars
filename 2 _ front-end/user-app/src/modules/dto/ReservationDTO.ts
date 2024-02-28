// [SGLEE:20240222THU_153100] Created

export default class ReservationDTO {
  rent_id: number;
  img: string;
  name: string;
  start_time: Date;
  end_time: Date;
  // (0) 운행 전, (1) 운행 중, (2) 운행 종료
  driving_status: number;

  constructor(
    rent_id = -1,
    img = "",
    name = "",
    start_time = new Date(),
    end_time = new Date(),
    driving_status = -1
  ) {
    this.rent_id = rent_id;
    this.img = img;
    this.name = name;
    this.start_time = start_time;
    this.end_time = end_time;
    this.driving_status = driving_status;
  }
}
