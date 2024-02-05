// [SGLEE:20240205MON_121200] Created

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { _$ } from "../modules/utils/BlueHtmlElem";
import { do_login } from "../modules/rest-clients/users";

interface LoginPageState {
  modalText: string;
  modalShow: boolean;
}

const LoginPage = () => {
  const [state, setState] = useState<LoginPageState>({
    modalText: "",
    modalShow: false,
  });
  const nav = useNavigate();

  const gotoVehicleListPage = () => {
    nav("/vehicle-list");
  };

  useEffect(() => {
    const user_email = _$("#user_email");

    user_email?.focus();
  }, []);

  const handleClickLoginBtn = async () => {
    const user_email = _$("#user_email") as HTMLInputElement;
    const user_pw = _$("#user_pw") as HTMLInputElement;

    const email = user_email ? user_email.value : "";
    const pw = user_pw ? user_pw.value : "";
    //console.log(email, pw);

    if (email === "") {
      setState({ modalShow: true, modalText: "이메일 주소를 입력하세요!" });
      user_email.focus();
      return;
    }

    if (pw === "") {
      setState({ modalShow: true, modalText: "비밀번호를 입력하세요!" });
      user_pw.focus();
      return;
    }

    //setState({ modalShow: true, modalText: `email: '${email}', pw: '${pw}'` });

    const msg = await do_login(email, pw);
    if (msg === "") {
      gotoVehicleListPage();
    } else {
      setState({ modalShow: true, modalText: msg });
      user_email.focus();
    }
  };

  const handleClickOkBtn = () => {
    setState({ modalShow: false, modalText: "" });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Modal
          show={state.modalShow}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>{"BLUECNT Rental Cars"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{state.modalText}</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClickOkBtn}>확인</Button>
          </Modal.Footer>
        </Modal>

        <div
          style={{
            padding: "2rem 8rem 2rem 8rem",

            width: "640px",
            height: "360px",

            border: "1px solid lightgray",
            borderRadius: "8px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div
            style={
              {
                // border: "1px solid blue",
              }
            }
          >
            <FormControl
              id="user_email"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>
          <div
            style={
              {
                // border: "1px solid blue",
              }
            }
          >
            <FormControl
              id="user_pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div
            style={{
              border: "1px solid blue",

              display: "flex",
            }}
          >
            <Button style={{ flex: "1" }} onClick={handleClickLoginBtn}>
              로그인
            </Button>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default LoginPage;
