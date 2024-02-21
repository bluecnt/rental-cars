// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { ReactNode, useEffect, useState } from "react";
import SplashContent from "./0_SplashPage/SplashContent";
import { is_login } from "../modules/rest-client/users";
import { Button } from "react-bootstrap";

interface SplashPageState {
  progbarNow: number;
  moreContent?: ReactNode;
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
    progbarNow: 1,
  });

  useEffect(() => {
    let i = state.progbarNow;
    const tid = setInterval(async () => {
      if (i <= 30) {
        setState((prev) => ({ ...prev, progbarNow: i++ }));
      } else {
        clearInterval(tid);

        if (true) {
          const moreContent = (
            <div
              style={{
                padding: "1rem 4rem 1rem 4rem",
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <Button onClick={gotoVehicleListPage} style={{ flex: "1" }}>
                차량 목록 페이지
              </Button>
              <Button onClick={gotoInitialPage} style={{ flex: "1" }}>
                초기 페이지
              </Button>
            </div>
          );
          setState((prev) => ({ ...prev, moreContent }));
        }

        // 로그인 상태라면 VehicleListPage로 이동
        if (await is_login()) {
          // gotoVehicleListPage();
        }
        // 그렇지 않다면 InitialPage로 이동
        else {
          // gotoInitialPage();
        }
      }
    }, 100);

    console.log("[SplashPage] mounted");
  }, []);

  useEffect(() => {
    console.log("[SplashPage] rendered");
  });

  return (
    <PageContainer>
      <ContentContainer>
        <SplashContent
          progbarNow={state.progbarNow}
          moreContent={state.moreContent}
        >
          <div
            style={{
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
