// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import SplashContent from "./0_SplashPage/SplashContent";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { Button } from "react-bootstrap";

const InitialPage = () => {
  const nav = useNavigate();

  const gotoLoginPage = () => {
    nav("/login");
  };

  const gotoRegisterPage = () => {
    nav("/register");
  };

  /*
  const handleClickBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const t = e.currentTarget as HTMLButtonElement;
    const id = t.id;

    // console.log(id);

    if (id === "loginBtn") {
      gotoLoginPage();
    } else if (id === "regBtn") {
      gotoRegisterPage();
    }
  };
  */

  return (
    <PageContainer>
      <ContentContainer>
        <SplashContent>
          <div
            style={{
              // border: "1px solid red",

              padding: "0 4rem 0 4rem",

              display: "flex",
              gap: "2rem",
            }}
          >
            <Button style={{ flex: "1" }} onClick={gotoLoginPage}>
              로그인
            </Button>
            <Button style={{ flex: "1" }} onClick={gotoRegisterPage}>
              회원가입
            </Button>
          </div>
        </SplashContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default InitialPage;
