// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const InitialPage = () => {
  const nav = useNavigate();

  const gotoLoginPage = () => {
    nav("/login");
  };

  return (
    <div>
      <div>InitialPage</div>
      <div onClick={gotoLoginPage}>goto [LoginPage]</div>
    </div>
  );
};

export default InitialPage;
