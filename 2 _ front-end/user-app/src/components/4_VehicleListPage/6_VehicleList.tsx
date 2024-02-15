/* eslint-disable react-hooks/exhaustive-deps */
// [SGLEE:20240215WED_172400] Created

import "./6_VehicleList.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";

type SelectVehicleEvent = (plId: number, vehicleId: number) => void;

interface VehicleListProps {
  parkingLotId: number;
  onSelectVehicle: SelectVehicleEvent;
}

// interface VehicleListState {
//   pl_name: string;
// }

const VehicleList = (props: VehicleListProps) => {
  const dataCtx = useContext(DataContext);
  // const [state, setState] = useState<VehicleListState>({
  //   pl_name: "",
  // });

  useEffect(() => {
    console.log("[VehicleList] mounted");
  }, []);

  useEffect(() => {
    console.log("[VehicleList] rendered");
  });

  const pl = dataCtx.state.parkingLots.find(
    (value) => value.pl_id === props.parkingLotId
  );

  console.log(pl);

  const handleClickVehicle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLDivElement;
    const vehicleIdDData = t.dataset.vehicleId;
    const vehicleId = Number(vehicleIdDData);

    //console.log(vehicleId);

    props.onSelectVehicle(pl ? pl.pl_id : -1, vehicleId);
  };

  const vehicle_list = pl?.vehicles.map((vehicle) => {
    return (
      <div onClick={handleClickVehicle} data-vehicle-id={vehicle.vehicle_id}>
        <div>차량 이름: {vehicle.name}</div>
        <div>가능 여부: {vehicle.usable ? "true" : "false"}</div>
        <hr></hr>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="title">차량 선택</div>
      <div className="body">
        {/* 주차장 */}
        <div>
          <div>{pl?.name}</div>
        </div>

        <hr></hr>

        {/* 차량 리스트 */}
        <div>{vehicle_list}</div>
      </div>
    </div>
  );
};

export default VehicleList;
