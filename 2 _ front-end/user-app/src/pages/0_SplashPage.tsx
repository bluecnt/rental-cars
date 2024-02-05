// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const nav = useNavigate();

  const gotoInitialPage = () => {
    nav("/initial");
  };

  return (
    <div>
      <div>SplashPage</div>
      <div onClick={gotoInitialPage}>goto [InitialPage]</div>
    </div>
  );
};

export default SplashPage;
