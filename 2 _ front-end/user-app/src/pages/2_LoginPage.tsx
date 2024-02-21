// [SGLEE:20240205MON_121200] Created

import "./2_LoginPage/2_LoginPage.css";

import { useNavigate } from "react-router-dom";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { Alert, Button, FormControl } from "react-bootstrap";
import { useContext, useEffect, useRef, useState } from "react";
import { _focus, _getValue, _setValue } from "../modules/utils/BlueHtmlElem";
import { do_login } from "../modules/rest-client/users";
import LoginDTO from "../modules/dto/LoginDTO";
import BsModal from "../modules/bootstrap/BsModal";
import { DataContext } from "../contexts/DataContext";

interface LoginPageState {
  modalTitle: string;
  modalText: string;
  modalShow: boolean;
}

const LoginPage = () => {
  const dataCtx = useContext(DataContext);
  const [state, setState] = useState<LoginPageState>({
    modalTitle: "BLUECNT Rental Cars",
    modalText: "",
    modalShow: false,
  });
  const currLoginDtoIdx = useRef<number>(0);
  const nav = useNavigate();

  const gotoVehicleListPage = () => {
    nav("/vehicle-list");
  };

  useEffect(() => {
    _focus("user_email");
  }, []);

  const setLoginDTO = (dto: LoginDTO) => {
    _setValue("user_email", dto.email);
    _setValue("user_pw", dto.pw);
  };

  const getLoginDTO = (): LoginDTO => {
    const dto = new LoginDTO();

    dto.email = _getValue("user_email");
    dto.pw = _getValue("user_pw");

    return dto;
  };

  const handleClickModalOkBtn = () => {
    setState((prev) => ({
      ...prev,
      modalShow: false,
    }));
  };

  const handleDblClickPanel = () => {
    const dtos: LoginDTO[] = [
      new LoginDTO("aa@bb.com", "1234"),
      new LoginDTO("cc@dd.com", "1234"),
      new LoginDTO(),
    ];

    setLoginDTO(dtos[currLoginDtoIdx.current++ % dtos.length]);
  };

  const checkField = (id: string, msg: string) => {
    const email = _getValue(id);

    if (email === "") {
      setState((prev) => ({
        ...prev,
        modalText: msg,
        modalShow: true,
      }));
      _focus(id);

      return false;
    }

    return true;
  };

  const handleClickLoginBtn = async () => {
    if (!checkField("user_email", "이메일 주소를 입력하세요")) return;
    if (!checkField("user_pw", "비밀번호를 입력하세요")) return;

    const dto = getLoginDTO();
    const userDTO = await do_login(dto);
    if (userDTO.msgFromServer === "") {
      console.log(userDTO);
      dataCtx.actions.setUserDTO(userDTO);
      gotoVehicleListPage();
    } else {
      setState((prev) => ({
        ...prev,
        modalText: userDTO.msgFromServer,
        modalShow: true,
      }));
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        <BsModal
          title={state.modalTitle}
          text={state.modalText}
          show={state.modalShow}
          cancelBtnText="" // 취소 버튼 사용 안 함
          onClickOkBtn={handleClickModalOkBtn}
        />

        <div
          className="login-content-container"
          onDoubleClick={handleDblClickPanel}
        >
          <Alert variant="info">
            ⬇️ 패널 더블 클릭 시 내용을 채우거나 비움
          </Alert>

          {/* 이메일 주소 */}
          <div>
            <FormControl
              id="user_email"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <FormControl
              id="user_pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {/* 로그인 */}
          <div
            style={{
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
