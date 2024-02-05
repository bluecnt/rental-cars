// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();

  const gotoVehicleListPage = () => {
    nav("/vehicle-list");
  };

  return (
    <div>
      <div>RegisterPage</div>
      <div onClick={gotoVehicleListPage}>goto [VihicleListPage]</div>
    </div>
  );
};

export default RegisterPage;
