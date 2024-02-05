// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
  const nav = useNavigate();

  const gotoReservationListPage = () => {
    nav("/reservation-list");
  };

  return (
    <div>
      <div>ReservationPage</div>
      <div onClick={gotoReservationListPage}>goto [ReservationListPage]</div>
    </div>
  );
};

export default ReservationPage;
