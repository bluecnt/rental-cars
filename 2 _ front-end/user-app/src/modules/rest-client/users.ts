// [SGLEE:20240205MON_145600] Created

import axios from "axios";
import LoginDTO from "../dto/LoginDTO";
import { RegisterDTO } from "../dto/RegisterDTO";
import UserDTO from "../dto/UserDTO";

// # 로그인 상태 얻기
export const is_login = async (): Promise<boolean> => {
  try {
    const resp = await axios.get("/rental/api/users/login");

    return resp.data.data.result === "ok";
  } catch (err) {
    console.error(err);
  }

  return false;
};

// # 로그인 하기
export const do_login = async (dto: LoginDTO): Promise<UserDTO> => {
  //return ""; // 성공
  //return "이메일 주소 또는 비밀번호를 확인하세요!";
  //return "관리자로부터 승인이 나지 않았습니다!";

  /*
  const userDto = new UserDTO(
    0,
    //
    new Date(),
    "id@domain.com",
    "blue",
    new Date(),
    "010-0000-0000",
    "0000",
    "국민카드",
    "0000-0000-0000-0000",
    0,
    true,
    false,
    //
    "",
    //
    ""
  );
  */

  try {
    const resp = await axios.post("/rental/api/users/login", {
      user_email: dto.email,
      user_pw: dto.pw,
    });

    //console.log(resp);

    return resp.data.data;
  } catch (err) {
    console.error(err);
  }

  return new UserDTO(-1);
};

// # 회원가입 하기
export const do_register = async (dto: RegisterDTO): Promise<string> => {
  // console.log(dto.toString());

  // return ""; // 성공
  //return "이미 가입한 이메일 주소입니다!";
  //return "이미 가입한 휴대폰 번호 입니다!";

  try {
    const resp = await axios.post("/rental/api/users/registration", {
      user_email: dto.email,
      user_pw: dto.pw,
      name: dto.name,
      birthday: dto.birthday,
      phone_number: dto.phone_number,
      license_number: dto.license_number,
      credit_card_company: dto.card_company,
      credit_card_number: dto.card_number,
    });
    if (resp.data.result === "ok") return "";
    else return resp.data.message;
  } catch (err) {
    console.error(err);

    return "/ERROR/";
  }
};
