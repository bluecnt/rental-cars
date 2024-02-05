// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();

  const gotoRegisterPage = () => {
    nav("/register");
  };

  return (
    <div>
      <div>LoginPage</div>
      <div onClick={gotoRegisterPage}>goto [RegisterPage]</div>
    </div>
  );
};

export default LoginPage;
