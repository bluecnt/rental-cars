// [SGLEE:20240205MON_121200] Created

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _focus, _getValue, _setValue } from "../modules/utils/BlueHtmlElem";
import PageContainer from "../components/common/PageContainer";
import ContentContainer from "../components/common/ContentContainer";
import { Alert, Button, FormControl, Modal } from "react-bootstrap";
import { do_register } from "../modules/rest-clients/users";
import { RegisterDTO } from "../modules/dto/RegisterDTO";

interface ModalTag {
  requestOk: boolean;
}

interface RegisterPageState {
  modalTitle: string;
  modalText: string;
  modalShow: boolean;
  modalTag: ModalTag;
}

const RegisterPage = () => {
  const [state, setState] = useState<RegisterPageState>({
    modalTitle: "BLUECNT Rental Cars",
    modalText: "",
    modalShow: false,
    modalTag: { requestOk: false },
  });
  const currRegDtoIdx = useRef<number>(0);
  const nav = useNavigate();

  const gotoLoginPage = () => {
    nav("/login");
  };

  useEffect(() => {
    _focus("user_email");
  }, []);

  useEffect(() => {
    //console.log("rendered");
    //console.log(state.modalText, state.modalTag);

    if (state.modalTag.requestOk) {
      gotoLoginPage();
    }
  });

  const setRegisterDTO = (dto: RegisterDTO) => {
    _setValue("user_email", dto.email);
    _setValue("user_pw", dto.pw);
    _setValue("name", dto.name);
    _setValue("birthday", dto.birthday);
    _setValue("phone_number", dto.phone_number);
    _setValue("license_number", dto.license_number);
    _setValue("card_company", dto.card_company);
    _setValue("card_number", dto.card_number);
  };

  const getRegisterDTO = (): RegisterDTO => {
    const dto = new RegisterDTO();

    dto.email = _getValue("user_email");
    dto.pw = _getValue("user_pw");
    dto.name = _getValue("name");
    dto.birthday = _getValue("birthday");
    dto.phone_number = _getValue("phone_number");
    dto.license_number = _getValue("license_number");
    dto.card_company = _getValue("card_company");
    dto.card_number = _getValue("card_number");

    return dto;
  };

  const handleClickModalOkBtn = () => {
    setState((prev) => ({
      ...prev,
      modalShow: false,
      modalTag: { requestOk: prev.modalText === "가입 승인 요청을 하였습니다" },
    }));
  };

  const handleDblClickPanel = () => {
    // setState((prev) => ({
    //   ...prev,
    //   modalText: "패널 더블클릭",
    //   modalShow: true,
    // }));

    const dtos: RegisterDTO[] = [
      new RegisterDTO(
        "aa@bb.com",
        "1234",
        "이블루",
        "1993-05-09",
        "010-0000-8086",
        "00-00-000000-00",
        "국민카드",
        "0000-0000-0000"
      ),
      new RegisterDTO(
        "cc@dd.com",
        "5678",
        "김그린",
        "1994-05-09",
        "010-0000-8087",
        "00-00-000000-00",
        "신한카드",
        "0000-0000-0000"
      ),
      //
      new RegisterDTO(),
    ];

    setRegisterDTO(dtos[currRegDtoIdx.current++ % dtos.length]);
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

  const handleClickRegBtn = async () => {
    if (!checkField("user_email", "이메일 주소를 입력하세요")) return;
    if (!checkField("user_pw", "비밀번호를 입력하세요")) return;
    if (!checkField("name", "이름을 입력하세요")) return;
    if (!checkField("birthday", "생년월일(YYYY-MM-DD)을 입력하세요")) return;
    if (!checkField("phone_number", "휴대폰 번호(010-0000-0000)를 입력하세요"))
      return;
    if (
      !checkField("license_number", "면허 번호(00-00-000000-00)를 입력하세요")
    )
      return;
    if (!checkField("card_company", "카드사를 입력하세요")) return;
    if (
      !checkField("card_number", "카드 번호(0000-0000-0000-0000)를 입력하세요")
    )
      return;

    const dto = getRegisterDTO();

    // setState((prev) => ({
    //   ...prev,
    //   modalText: dto.toString(),
    //   modalShow: true,
    // }));

    const msg = await do_register(dto);
    if (msg === "") {
      setState((prev) => ({
        ...prev,
        modalText: "가입 승인 요청을 하였습니다",
        modalShow: true,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        modalText: msg,
        modalShow: true,
      }));
    }
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
            <Modal.Title>{state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{state.modalText}</Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClickModalOkBtn}>확인</Button>
          </Modal.Footer>
        </Modal>

        <Alert variant="info">⬇️ 패널 더블 클릭 시 내용을 채우거나 비움</Alert>

        <div
          style={{
            padding: "4rem 8rem 4rem 8rem",

            width: "640px",

            border: "1px solid lightgray",
            borderRadius: "8px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}
          onDoubleClick={handleDblClickPanel}
        >
          <div>
            <FormControl
              id="user_email"
              placeholder="이메일 주소를 입력하세요"
            />
          </div>
          <div>
            <FormControl
              id="user_pw"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div>
            <FormControl id="name" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <FormControl
              id="birthday"
              placeholder="생년월일(YYYY-MM-DD)을 입력하세요"
            />
          </div>
          <div>
            <FormControl
              id="phone_number"
              placeholder="휴대폰 번호(010-0000-0000) 입력하세요"
            />
          </div>
          <div>
            <FormControl
              id="license_number"
              placeholder="면허 번호(00-00-000000-00) 입력하세요"
            />
          </div>
          <div>
            <FormControl id="card_company" placeholder="카드사를 입력하세요" />
          </div>
          <div>
            <FormControl
              id="card_number"
              placeholder="카드 번호(0000-0000-0000-0000)를 입력하세요"
            />
          </div>

          <div style={{ display: "flex" }}>
            <Button style={{ flex: "1" }} onClick={handleClickRegBtn}>
              회원가입
            </Button>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default RegisterPage;
