// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const VehicleListPage = () => {
  const nav = useNavigate();

  const gotoReservationPage = () => {
    nav("/reservation");
  };

  return (
    <div>
      <div>VehicleListPage</div>
      <div onClick={gotoReservationPage}>goto [ReservationPage]</div>
    </div>
  );
};

export default VehicleListPage;
