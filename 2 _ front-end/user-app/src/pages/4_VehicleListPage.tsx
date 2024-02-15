/* eslint-disable react-hooks/exhaustive-deps */

// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import VehicleListMap from "../components/4_VehicleListPage/1_VehicleListMap";
import { ReactNode, useContext, useEffect, useState } from "react";
import NaverMapLocation from "../modules/naver-map/NaverMapLocation";
import {
  _addTime,
  _dateTimeToStr,
  _next30Min,
} from "../modules/utils/BlueTime";
import { _getElemRect, _setElemSize } from "../modules/utils/BlueHtmlElem";
import TimeSelector from "../components/4_VehicleListPage/5_TimeSelector";
import NaverMapMarker from "../modules/naver-map/NaverMapMarker";
import VehicleListTimeBar from "../components/4_VehicleListPage/2_VehicleListTimeBar";
import VehicleListAddrBar from "../components/4_VehicleListPage/0_VehicleListAddrBar";
import { get_vehicle_list } from "../modules/rest-clients/vehicle-list";
import { DataContext } from "../contexts/DataContext";
import VehicleList from "../components/4_VehicleListPage/6_VehicleList";
import { ParkingLotsDTO } from "../modules/dto/ParkingLotDTO";
import { VehicleDTO } from "../modules/dto/VehicleDTO";

interface VehicleListPageState {
  addr: string;
  rentStartTime: Date;
  rentEndTime: Date;
  dimmedChild?: ReactNode;

  parkingLotId?: number;
}
const VehicleListPage = () => {
  const rentStartTime = _next30Min();
  const [state, setState] = useState<VehicleListPageState>({
    addr: "건원대로 34번길 32-29", // 구리역
    rentStartTime: rentStartTime,
    rentEndTime: _addTime(rentStartTime, 4, 0, 0),
  });
  const dataCtx = useContext(DataContext);
  const nav = useNavigate();

  // ⭐ 차량 목록 요청
  const requestVehicleList = async (startTime?: Date, endTime?: Date) => {
    if (startTime === undefined) startTime = state.rentStartTime;
    if (endTime === undefined) endTime = state.rentEndTime;

    console.warn(`다음 조건으로 차량 리스트 요청 중..`);
    console.warn(`대여 시간: ${_dateTimeToStr(startTime)}`);
    console.warn(`반납 시간: ${_dateTimeToStr(endTime)}`);

    const pl = await get_vehicle_list(startTime, endTime);
    // console.log(pl);
    if (Array.isArray(pl)) dataCtx.actions.setParkingLots(pl);
    else {
      //
    }
  };

  useEffect(() => {
    console.log("[VehicleListPage] mounted");

    const updateContentDimmedLayerSize = () => {
      const r = _getElemRect("content-container");
      _setElemSize("content-dimmed", undefined, r.h);
    };

    window.addEventListener("resize", (e) => {
      updateContentDimmedLayerSize();
    });

    updateContentDimmedLayerSize();

    const asyncFunc = async () => {
      //
      await requestVehicleList();
      //
    };

    asyncFunc();
  }, []);

  useEffect(() => {
    console.log("[VehicleListPage] rendered");
  });

  // const gotoReservationPage = () => {
  //   nav("/reservation");
  // };

  const gotoReservationListPage = () => {
    nav("/reservation-list");
  };

  const handleChangeAddr = (loc: NaverMapLocation) => {
    setState((prev) => ({ ...prev, addr: loc.Addr, dimmedChild: undefined }));

    setState((prev) => ({ ...prev, parkingLotId: undefined }));
  };

  const handleClickMarker = (marker: NaverMapMarker) => {
    //alert(marker.Location?.AddrRoad);
    //console.log(marker.Location?.toString());

    const pl_id = marker.Sn;
    setState((prev) => ({ ...prev, parkingLotId: pl_id }));
  };

  const handleClickReserveListBtn = () => {
    gotoReservationListPage();
  };

  const handleClickRentTimeOk = async (startTime: Date, endTime: Date) => {
    // console.log(`startTime: ${_dateTimeToStr(startTime)}`);
    // console.log(`endTime:   ${_dateTimeToStr(endTime)}`);

    //
    await requestVehicleList(startTime, endTime);
    //

    setState((prev) => ({
      ...prev,
      rentStartTime: startTime,
      rentEndTime: endTime,
      dimmedChild: undefined,
    }));
  };

  const handleClickRentTime = () => {
    // const dimmed = _$("#content-dimmed");
    // if (dimmed?.style) dimmed.style.display = "flex";

    setState((prev) => ({
      ...prev,
      dimmedChild: (
        <TimeSelector
          startTime={state.rentStartTime}
          endTime={state.rentEndTime}
          onClickOk={handleClickRentTimeOk}
        />
      ),
    }));
  };

  const handleSelectVehicle = (plId: number, vehicleId: number) => {
    const pl = dataCtx.state.parkingLots.find((pl) => pl.pl_id === plId);
    const vehicle = pl?.vehicles.find(
      (vehicle) => vehicle.vehicle_id === vehicleId
    );

    if (pl && vehicle) {
      alert(pl.name + " => " + vehicle.name);
    }
  };

  return (
    <PageContainer>
      <ContentContainer id="content-container" dimmedChild={state.dimmedChild}>
        <VehicleListAddrBar
          addr={state.addr}
          onClickReserveListBtn={handleClickReserveListBtn}
        />
        <VehicleListMap
          addr={state.addr}
          onChangeAddr={handleChangeAddr}
          onClickMarker={handleClickMarker}
        />
        <VehicleListTimeBar
          rentStartTime={state.rentStartTime}
          rentEndTime={state.rentEndTime}
          onClickRentTime={handleClickRentTime}
        />
      </ContentContainer>

      {state.parkingLotId !== undefined && (
        <VehicleList
          parkingLotId={state.parkingLotId}
          onSelectVehicle={handleSelectVehicle}
        />
      )}
    </PageContainer>
  );
};

export default VehicleListPage;
