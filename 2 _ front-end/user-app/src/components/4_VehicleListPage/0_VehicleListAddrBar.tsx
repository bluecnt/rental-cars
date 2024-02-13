// [SGLEE:20240207WED_145200] Created

import "./0_VehicleListAddrBar.css";

type OnClickDiv = () => void;

interface VehicleListAddrBarProps {
  addr: string;
  onClickReserveListBtn: OnClickDiv;
}

const VehicleListAddrBar = (props: VehicleListAddrBarProps) => {
  const handleClickReserveListBtn = () => {
    props.onClickReserveListBtn();
  };

  return (
    <div className="addr-cntr">
      <div className="addr">{props.addr}</div>
      <div className="reserve-list" onClick={handleClickReserveListBtn}>
        예약 리스트
      </div>
    </div>
  );
};

export default VehicleListAddrBar;
