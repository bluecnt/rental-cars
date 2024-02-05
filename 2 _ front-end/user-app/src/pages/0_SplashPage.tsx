// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { useEffect, useState } from "react";
import SplashContent from "../components/SplashContent";
import { is_login } from "../modules/rest-clients/users";

interface SplashPageState {
  progbarNow: number;
}

const SplashPage = () => {
  const nav = useNavigate();

  const gotoInitialPage = () => {
    nav("/initial");
  };

  const gotoVehicleListPage = () => {
    nav("/vehicle-list");
  };

  const [state, setState] = useState<SplashPageState>({
    progbarNow: 0,
  });

  useEffect(() => {
    let i = 0;
    const tid = setInterval(() => {
      if (i <= 30) {
        setState((prev) => ({ ...prev, progbarNow: i }));
        i++;
      } else {
        clearInterval(tid);

        // 로그인 상태라면 VehicleListPage로 이동
        if (is_login()) {
          alert("로그인 상태이므로 VehicleListPage로 이동합니다");

          gotoVehicleListPage();
        }
        // 그렇지 않다면 InitialPage로 이동
        else {
          alert("로그인 상태가 아니므로 InitialPage로 이동합니다");

          gotoInitialPage();
        }
      }
    }, 100);
  }, []);

  return (
    <PageContainer>
      <ContentContainer>
        <SplashContent progbarNow={state.progbarNow}>
          <div
            style={{
              // border: "1px solid green",

              display: "flex",
              justifyContent: "end",
            }}
          >
            by 이시관, 길근영, 유재환
          </div>
        </SplashContent>
      </ContentContainer>
    </PageContainer>
  );
};

export default SplashPage;
