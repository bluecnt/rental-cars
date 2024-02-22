// [SGLEE:20240207WED_145500] Created

import "./2_VehicleListTimeBar.css";

import { _dateTimeToStr } from "../../modules/utils/BlueTime";
import { useEffect } from "react";

type OnClickDiv = () => void;

interface VehicleListTimeBarProps {
  rentStartTime: Date;
  rentEndTime: Date;
  onClickRentTime: OnClickDiv;
}

const VehicleListTimeBar = (props: VehicleListTimeBarProps) => {
  const handleClickCntr = () => {
    props.onClickRentTime();
  };

  useEffect(() => {
    console.log("[2_VehicleListTimeBar] rendered");
    // console.log(
    //   `Time: ${_dateTimeToStr(props.rentStartTime)} ~ ${_dateTimeToStr(
    //     props.rentEndTime
    //   )}`
    // );
  });

  return (
    <div className="time-cntr" onClick={handleClickCntr}>
      <div className="time-label">이용 시간</div>
      <div className="time-rent-time">
        {_dateTimeToStr(props.rentStartTime)} ~
        {_dateTimeToStr(props.rentEndTime)}
      </div>
    </div>
  );
};

export default VehicleListTimeBar;
