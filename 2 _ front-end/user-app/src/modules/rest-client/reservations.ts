// [SGLEE:20240220TUE_172300] Created

import axios from "axios";
import ReservationDTO from "../dto/ReservationDTO";
import { _calcTimeDiff, _isoTimeStrKr } from "../utils/BlueTime";

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

const _reservation_get_test = (): Promise<ReservationDTO[]> => {
  return new Promise<ReservationDTO[]>((resolve, reject) => {
    setTimeout(() => {
      const dto = new ReservationDTO(
        100,
        "?",
        "아반떼CN7",
        new Date(2024, 2, 22, 16, 0, 0),
        new Date(2024, 2, 22, 20, 0, 0),
        2
      );
      const dtos: ReservationDTO[] = [dto];
      resolve(dtos);
    }, 100);
  });
};

// # 예약 추가
export const reservation_add = async (
  cust_id: number,
  reg_id: number,
  start_time: Date,
  end_time: Date
): Promise<string> => {
  //return await _reservation_add_test(cust_id, reg_id, start_time, end_time);

  try {
    const resp = await axios.post("/rental/api/reservations", {
      cust_id: cust_id,
      reg_id: reg_id,
      start_time: _isoTimeStrKr(start_time.getTime()),
      end_time: _isoTimeStrKr(end_time.getTime()),
    });

    return resp.data.result === "ok" ? "" : resp.data.message;
  } catch (err) {
    console.error(err);
  }

  return "";
};

// # 예약 얻기
export const reservations_get = async (
  cust_id: number
): Promise<ReservationDTO[]> => {
  //return _reservation_get_test();

  try {
    const params = `cust_id=${cust_id}`;
    const resp = await axios.get("/rental/api/reservations?" + params);

    return resp.data.data;
  } catch (err) {
    console.error(err);
  }

  return [];
};
