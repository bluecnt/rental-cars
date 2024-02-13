// [SGLEE:20240207WED_145500] Created

import { _dateTimeToStr } from "../../modules/utils/BlueTime";
import "./2_VehicleListTimeBar.css";

type OnClickDiv = () => void;

interface VehicleListTimeBarProps {
  rentStartTime: Date;
  rentEndTime: Date;
  onClickRentTime: OnClickDiv;
}

const VehicleListTimeBar = (props: VehicleListTimeBarProps) => {
  const handleClickRentTime = () => {
    props.onClickRentTime();
  };

  return (
    <div className="time-cntr">
      <div className="time">이용 시간</div>
      <div className="cntr">
        <div className="rent-time" onClick={handleClickRentTime}>
          {_dateTimeToStr(props.rentStartTime)} ~
          {_dateTimeToStr(props.rentEndTime)}
        </div>
      </div>
    </div>
  );
};

export default VehicleListTimeBar;
