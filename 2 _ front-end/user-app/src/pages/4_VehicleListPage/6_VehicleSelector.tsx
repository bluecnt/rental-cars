/* eslint-disable react-hooks/exhaustive-deps */
// [SGLEE:20240215WED_172400] Created

import "./6_VehicleSelector.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";

import gn7Img from "./../../images/vehicles/gn7.jpg";
import { _makeCurrencyStr } from "../../modules/utils/BlueString";
import { calcPrice } from "../../modules/rest-client/reservations";

type SelectVehicleEvent = (
  regId: number,
  plId: number,
  vehicleId: number
) => void;

interface VehicleSelectorProps {
  startTime: Date;
  endTime: Date;
  parkingLotId: number;
  onSelectVehicle: SelectVehicleEvent;
}

const VehicleSelector = (props: VehicleSelectorProps) => {
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    // console.log("[VehicleList] mounted");
  }, []);

  useEffect(() => {
    // console.log("[VehicleList] rendered");
  });

  const pl = dataCtx.state.parkingLots.find(
    (value) => value.pl_id === props.parkingLotId
  );

  const handleClickVehicle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLDivElement;
    const vehicleIdDData = t.dataset.vehicleId;
    const vehicleId = Number(vehicleIdDData);

    const vehicle = pl?.vehicles.find((v) => v.vehicle_id === vehicleId);
    if (vehicle?.usable) {
      props.onSelectVehicle(vehicle.reg_id, pl ? pl.pl_id : -1, vehicleId);
    }
  };

  const vehicle_list = pl?.vehicles.map((vehicle) => {
    const className = vehicle.usable
      ? "vehicle-container"
      : "vehicle-container-disabled";

    const price = calcPrice(
      props.startTime,
      props.endTime,
      vehicle.price_per_hour
    );

    return (
      <div
        key={vehicle.vehicle_id}
        className={className}
        data-vehicle-id={vehicle.vehicle_id}
        onClick={handleClickVehicle}
      >
        {/* 차량 이미지 */}
        <div className="vehicle-img">
          {/* 차량 이미지 */}
          <div>
            {/* <img src="./images/vehicles/gn7.jpg" width={64}></img> */}
            <img src={gn7Img} width={64} alt={"차량 이미지"} />
          </div>

          {/* 주행 단가 */}
          <div className="vehicle-price-per-km">
            {vehicle.price_per_km}&nbsp;원/km
          </div>
        </div>

        {/* 차량 정보 */}
        <div className="vehicle-info">
          {/* 차량 이름 */}
          <div>
            <b>{vehicle.name}</b>
          </div>
          {/* 차량 옵션 */}
          <div className="vehicle-opts">{vehicle.options}</div>
          {/* 대여 비용 */}
          <div className="vehicle-price">
            <b>{_makeCurrencyStr(price)}</b>원
          </div>
        </div>

        {/* disabled */}
        {!vehicle.usable && <div className="vehicle-disabled" />}
      </div>
    );
  });

  return (
    <div className="vl-container">
      <div className="vl-header">차량 선택</div>
      <div className="vl-body">
        {/* 주차장 */}
        <div className="vl-body-parking-lot">
          <b>{pl?.name}</b>&nbsp;
          {/* ({pl?.address}) */}
        </div>

        {/* 차량 리스트 */}
        <div className="vl-body-vehicle-list">{vehicle_list}</div>
      </div>
    </div>
  );
};

export default VehicleSelector;
