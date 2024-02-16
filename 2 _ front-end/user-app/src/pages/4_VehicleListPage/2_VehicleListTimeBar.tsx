// [SGLEE:20240207WED_145500] Created

import "./2_VehicleListTimeBar.css";

import { _dateTimeToStr } from "../../modules/utils/BlueTime";

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
