// [SGLEE:20240220TUE_172300] Created

import ReservationDTO from "../dto/ReservationDTO";
import { _calcTimeDiff } from "../utils/BlueTime";

const _reservation_add_test = async (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
): Promise<string> => {
  return "ok";
};

// 100원 단위
export const calcPrice = (
  startTime: Date,
  endTime: Date,
  pricePerHour: number
): number => {
  const { hours: h, minutes: m } = _calcTimeDiff(startTime, endTime);
  let p = Math.floor(h * pricePerHour + (m / 60) * pricePerHour);
  p = Math.floor(p / 100);
  p *= 100;
  return p;
};

// # 예약 추가
export const reservation_add = async (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
): Promise<string> => {
  return await _reservation_add_test(cust_id, reg_id, start_time, end_time);
};

const _reservation_get_test = (): Promise<ReservationDTO[]> => {
  return new Promise<ReservationDTO[]>((resolve, reject) => {
    setTimeout(() => {
      const dto = new ReservationDTO(
        100,
        "?",
        "아반떼CN7",
        new Date(2024, 2, 22, 16, 0, 0),
        new Date(2024, 2, 22, 20, 0, 0),
        0
      );
      const dtos: ReservationDTO[] = [dto];
      resolve(dtos);
    }, 1000);
  });
};

export const reservations_get = async (
  cust_id: number
): Promise<ReservationDTO[]> => {
  return _reservation_get_test();
};
