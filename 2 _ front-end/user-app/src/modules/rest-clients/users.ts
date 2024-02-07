// [SGLEE:20240205MON_145600] Created

import LoginDTO from "../dto/LoginDTO";
import { RegisterDTO } from "../dto/RegisterDTO";

// # 로그인 상태 얻기
export const is_login = async (): Promise<boolean> => {
  return !true;
};

// # 로그인 하기
export const do_login = async (dto: LoginDTO): Promise<string> => {
  //return ""; // 성공
  //return "이메일 주소 또는 비밀번호를 확인하세요!";
  return "관리자로부터 승인이 나지 않았습니다!";
};

// # 회원가입 하기
export const do_register = async (dto: RegisterDTO): Promise<string> => {
  console.log(dto.toString());

  return ""; // 성공
  //return "이미 가입한 이메일 주소입니다!";
  //return "이미 가입한 휴대폰 번호 입니다!";
};
