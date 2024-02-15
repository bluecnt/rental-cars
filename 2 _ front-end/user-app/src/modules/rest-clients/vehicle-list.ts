// [SGLEE:20240214WED_113400] Created

/*
  # 주차장 리스트
    1. 구리역
      - Addr:     '경기도 구리시 인창동 244-2 구리역사' 
      - Coord:    (127.1436109, 37.6033337) 
      - AddrRoad: '경기도 구리시 건원대로34번길 32-29 구리역사' 
      - AddrEng:  '32-29, Geonwon-daero 34beon-gil, Guri-si, Gyeonggi-do, Republic of Korea' 
      - Addrs:    [0] '경기도 구리시 인창동 244-2 구리역사'
    2. 도농역
      - Addr:     '경기도 남양주시 다산동 4056-1 도농역' 
      - Coord:    (127.1611529, 37.6088256) 
      - AddrRoad: '경기도 남양주시 경춘로 433 도농역' 
      - AddrEng:  '433, Gyeongchun-ro, Namyangju-si, Gyeonggi-do, Republic of Korea' 
      - Addrs:    [0] '경기도 남양주시 다산동 4056-1 도농역'
*/

import { ParkingLotsDTO } from "../dto/ParkingLotDTO";
import { VehicleDTO } from "../dto/VehicleDTO";

// 테스트 데이터
const _get_test_data = async (): Promise<ParkingLotsDTO[]> => {
  const pl = new Array<ParkingLotsDTO>();

  //------------------------------------------------------------------
  // 구리역
  //------------------------------------------------------------------
  {
    const v0 = new VehicleDTO(
      0,
      new Date(),
      "아반떼CN7",
      "img",
      "123허1234",
      "opts",
      5000,
      200,
      "desc",
      "remark",
      //
      true
    );

    const v1 = new VehicleDTO(
      1,
      new Date(),
      "쏘나타DN8",
      "img",
      "123허4567",
      "opts",
      6000,
      210,
      "desc",
      "remark",
      //
      true
    );

    const v2 = new VehicleDTO(
      2,
      new Date(),
      "그랜저GN7",
      "img",
      "160허1289",
      "opts",
      7000,
      220,
      "desc",
      "remark",
      //
      true
    );

    const vehicles0 = new Array<VehicleDTO>();
    vehicles0.push(v0);
    vehicles0.push(v1);
    vehicles0.push(v2);

    const pl0 = new ParkingLotsDTO(
      0,
      new Date(),
      "구리역",
      "경기도 구리시 건원대로34번길 32-29 구리역사",
      37.6033337,
      127.1436109,
      "desc",
      "remark",
      //
      3,
      vehicles0
    );

    pl.push(pl0);
  }

  //------------------------------------------------------------------
  // 도농역
  //------------------------------------------------------------------
  {
    const v0 = new VehicleDTO(
      0,
      new Date(),
      "G70",
      "img",
      "165허1234",
      "opts",
      10000,
      300,
      "desc",
      "remark",
      //
      false
    );

    const v1 = new VehicleDTO(
      1,
      new Date(),
      "G80",
      "img",
      "165허4567",
      "opts",
      11000,
      310,
      "desc",
      "remark",
      //
      false
    );

    const v2 = new VehicleDTO(
      2,
      new Date(),
      "G90",
      "img",
      "165허1289",
      "opts",
      1200,
      320,
      "desc",
      "remark",
      //
      false
    );

    const vehicles1 = new Array<VehicleDTO>();
    vehicles1.push(v0);
    vehicles1.push(v1);
    vehicles1.push(v2);

    const pl1 = new ParkingLotsDTO(
      1,
      new Date(),
      "도농역",
      "경기도 남양주시 경춘로 433",
      37.6033337,
      127.1436109,
      "desc",
      "remark",
      //
      0,
      vehicles1
    );

    pl.push(pl1);
  }

  return new Promise((resolve, reject) => {
    // 1초 걸린다고 가정
    setTimeout(() => {
      resolve(pl);
    }, 1000);
  });
};

// # 차량 리스트 얻기
export const get_vehicle_list = async (
  startTime: Date,
  endTime: Date
): Promise<ParkingLotsDTO[] | string> => {
  return await _get_test_data();

  //

  //return "";
};
