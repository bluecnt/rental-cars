/* eslint-disable react-hooks/exhaustive-deps */
// [SGLEE:20240215WED_172400] Created

import "./6_VehicleSelector.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";

import gn7Img from "./../../images/vehicles/gn7.jpg";
import { _makeCurrencyStr } from "../../modules/utils/BlueString";

type SelectVehicleEvent = (plId: number, vehicleId: number) => void;

interface VehicleSelectorProps {
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

    props.onSelectVehicle(pl ? pl.pl_id : -1, vehicleId);
  };

  const vehicle_list = pl?.vehicles.map((vehicle) => {
    return (
      <div
        key={vehicle.vehicle_id}
        className="vehicle-container"
        data-vehicle-id={vehicle.vehicle_id}
        onClick={handleClickVehicle}
      >
        {/* 차량 이미지 */}
        <div className="vehicle-img">
          {/* 차량 이미지 */}
          <div>
            {/* <img src="./images/vehicles/gn7.jpg" width={64}></img> */}
            <img src={gn7Img} width={64} />
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
            <b>{_makeCurrencyStr(4 * vehicle.price_per_hour)}</b>원
          </div>
        </div>
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
