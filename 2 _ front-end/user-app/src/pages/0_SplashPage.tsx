// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import ContentContainer from "../components/ContentContainer";
import { ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { is_login } from "../modules/rest-clients/users";

interface SplashContentProps {
  progbarNow: number;
}

const SplashContent = (props: SplashContentProps) => {
  return (
    <div
      style={{
        padding: "1rem",

        width: "640px",
        height: "360px",

        border: "1px solid lightgray",

        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          // border: "1px solid blue",

          fontSize: "2rem",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        BLUECNT
      </div>

      <div
        style={{
          // border: "1px solid blue",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          color: "darkblue",
          fontSize: "4rem",
          fontWeight: "bold",

          flex: "1",
        }}
      >
        Rental Cars
      </div>

      <div
        style={{
          // border: "1px solid blue",

          display: "flex",
        }}
      >
        <div
          style={{
            // border: "1px solid green",

            flex: "1",
          }}
        >
          <ProgressBar
            id="progbar"
            style={{ height: "100%" }}
            min={0}
            max={30}
            now={props.progbarNow}
          ></ProgressBar>
        </div>
        <div
          style={{
            // border: "1px solid green",

            paddingLeft: "1rem",
          }}
        >
          by 이시관, 길근영, 유재환
        </div>
      </div>
    </div>
  );
};

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
        <SplashContent progbarNow={state.progbarNow} />
      </ContentContainer>
    </PageContainer>
  );
};

export default SplashPage;
