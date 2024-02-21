/* eslint-disable react-hooks/exhaustive-deps */

// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { ReactNode, useContext, useEffect, useState } from "react";
import NaverMapLocation from "../modules/naver-map/NaverMapLocation";
import {
  _addTime,
  _dateTimeToStr,
  _next30Min,
} from "../modules/utils/BlueTime";
import TimeSelector from "./4_VehicleListPage/5_TimeSelector";
import NaverMapMarker from "../modules/naver-map/NaverMapMarker";
import { get_vehicle_list } from "../modules/rest-client/vehicle-list";
import { DataContext } from "../contexts/DataContext";
import VehicleListAddrBar from "./4_VehicleListPage/0_VehicleListAddrBar";
import VehicleListMap from "./4_VehicleListPage/1_VehicleListMap";
import VehicleListTimeBar from "./4_VehicleListPage/2_VehicleListTimeBar";
import Dimmer from "../components/common/Dimmer";
import VehicleSelector from "./4_VehicleListPage/6_VehicleSelector";
import { Spinner } from "react-bootstrap";
import { reservation_add } from "../modules/rest-client/reservations";

interface VehicleListPageState {
  addr: string;
  rentStartTime: Date;
  rentEndTime: Date;

  dimmerChild: ReactNode;
  vehicleSelectorPlId: number;
  showLoadingSpinner: boolean;
}
const VehicleListPage = () => {
  const DataCtx = useContext(DataContext);

  const rentStartTime = _next30Min();
  const [state, setState] = useState<VehicleListPageState>({
    addr: DataCtx.state.mapCenterAddr,
    rentStartTime: rentStartTime,
    rentEndTime: _addTime(rentStartTime, 4, 0, 0),

    showLoadingSpinner: false,

    dimmerChild: undefined,

    vehicleSelectorPlId: -1,
  });
  const dataCtx = useContext(DataContext);
  const nav = useNavigate();

  useEffect(() => {
    console.log("[VehicleListPage] mounted");

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

  //------------------------------------------------------------------

  // const gotoReservationPage = () => {
  //   nav("/reservation");
  // };

  const gotoReservationListPage = () => {
    nav("/reservation-list");
  };

  //------------------------------------------------------------------

  // ⭐ 차량 목록 요청
  const requestVehicleList = async (startTime?: Date, endTime?: Date) => {
    if (startTime === undefined) startTime = state.rentStartTime;
    if (endTime === undefined) endTime = state.rentEndTime;

    console.warn(`다음 조건으로 차량 리스트 요청 중..`);
    console.warn(`대여 시간: ${_dateTimeToStr(startTime)}`);
    console.warn(`반납 시간: ${_dateTimeToStr(endTime)}`);

    showLoadingSpinner(true);

    const pl = await get_vehicle_list(startTime, endTime);
    // console.log(pl);
    if (Array.isArray(pl)) {
      dataCtx.actions.setParkingLots(pl);
    } else {
      //
    }

    showLoadingSpinner(false);
  };

  //------------------------------------------------------------------

  const setAddrBarText = (text: string) => {
    setState((prev) => ({ ...prev, addr: text }));
  };

  const setRentTime = (startTime: Date, endTime: Date) => {
    setState((prev) => ({
      ...prev,
      rentStartTime: startTime,
      rentEndTime: endTime,
    }));
  };

  const showDimmer = (child: ReactNode) => {
    setState((prev) => ({ ...prev, dimmerChild: child }));
  };

  const showTimeSelector = (show: boolean) => {
    const child = show ? (
      <TimeSelector
        startTime={state.rentStartTime}
        endTime={state.rentEndTime}
        onClickOk={handleClickTimeSelectorOk}
      />
    ) : undefined;
    showDimmer(child);
  };

  const showVehicleSelector = (plId: number) => {
    setState((prev) => ({
      ...prev,
      vehicleSelectorPlId: plId,
    }));

    // const child =
    //   plId > -1 ? (
    //     <VehicleList
    //       parkingLotId={plId}
    //       onSelectVehicle={handleSelectVehicle}
    //     />
    //   ) : undefined;
    // showDimmer(child);
  };

  const showLoadingSpinner = (show: boolean) => {
    const dimmerChild = show ? (
      <div
        style={{
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <Spinner animation="border" variant="warning" />
      </div>
    ) : undefined;

    setState((prev) => ({
      ...prev,
      dimmerChild,
      showLoadingSpinner: show,
    }));
  };

  //------------------------------------------------------------------

  const handleChangeAddr = (loc: NaverMapLocation) => {
    const addr = loc.AddrRoad !== "" ? loc.AddrRoad : loc.Addr;
    setAddrBarText(addr);
    showVehicleSelector(-1);
  };

  const handleClickReserveListBtn = () => {
    gotoReservationListPage();
  };

  const handleClickMarker = (marker: NaverMapMarker) => {
    //alert(marker.Location?.AddrRoad);
    //console.log(marker.Location?.toString());

    const plId = marker.Sn;
    showVehicleSelector(plId);
  };

  //const handleSelectVehicle = (plId: number, vehicleId: number) => {
  const handleSelectVehicle = async (regId: number) => {
    // const pl = dataCtx.state.parkingLots.find((pl) => pl.pl_id === plId);
    // const vehicle = pl?.vehicles.find(
    //   (vehicle) => vehicle.vehicle_id === vehicleId
    // );

    //    if (pl && vehicle) {
    //alert(pl.name + " => " + vehicle.name);
    //console.log(dataCtx.state.userDTO.cust_id);

    const cust_id = dataCtx.state.userDTO.cust_id;
    const start_time = state.rentStartTime;
    const end_time = state.rentEndTime;
    const msg = await reservation_add(cust_id, regId, start_time, end_time);
    if (msg === "ok") {
      alert(msg);
    }
    //  }
  };

  const handleClickTimeSelectorOk = async (startTime: Date, endTime: Date) => {
    // console.log(`startTime: ${_dateTimeToStr(startTime)}`);
    // console.log(`endTime:   ${_dateTimeToStr(endTime)}`);

    setRentTime(startTime, endTime);
    showTimeSelector(false);

    await requestVehicleList(startTime, endTime);
  };

  const handleClickRentTime = () => {
    showVehicleSelector(-1);
    showTimeSelector(true);
  };

  return (
    <PageContainer>
      <ContentContainer>
        <VehicleListMap
          onChangeAddr={handleChangeAddr}
          onClickMarker={handleClickMarker}
        />

        <VehicleListAddrBar
          addr={state.addr}
          onClickReserveListBtn={handleClickReserveListBtn}
        />

        <VehicleListTimeBar
          rentStartTime={state.rentStartTime}
          rentEndTime={state.rentEndTime}
          onClickRentTime={handleClickRentTime}
        />

        {state.vehicleSelectorPlId > -1 && (
          <VehicleSelector
            parkingLotId={state.vehicleSelectorPlId}
            onSelectVehicle={handleSelectVehicle}
          />
        )}

        <Dimmer
          targetSizeElemId="content-container"
          zIndex={1010}
          children={state.dimmerChild}
        />
      </ContentContainer>
    </PageContainer>
  );
};

export default VehicleListPage;
