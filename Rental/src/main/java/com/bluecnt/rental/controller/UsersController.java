package com.bluecnt.rental.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.service.CustomersService;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/api/users")
public class UsersController {
	
	@Autowired
	CustomersService customersService;

	@PostMapping(value = "/login", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, String>> loginEnter(@RequestBody CustomerDTO dto) {
	    log.info("유저의 이메일: " + dto.getUser_email());
	    log.info("유저의 비밀번호: " + dto.getUser_pw());
	    log.info("유저 승인여부: " + dto.getAccept());
	    
	    // 서비스 레이어를 사용하여 사용자 정보 확인
	    List<CustomerDTO> userList = customersService.getUserByEP(
	    		dto.getUser_email(), dto.getUser_pw(), dto.getAccept());

	    Map<String, String> response = new HashMap<>();
	    
	    if (!userList.isEmpty()) {
	        CustomerDTO foundUser = userList.get(0); // 첫 번째 사용자 정보를 가져옴
	        if (foundUser.getUser_pw().equals(dto.getUser_pw())) {
	            response.put("user_email", foundUser.getUser_email());
	            response.put("message", "로그인 성공했습니다.");
	            return ResponseEntity.ok().body(response);
	        }
	    }
	    
	    response.put("message", "로그인 실패했습니다.");
	    return ResponseEntity.badRequest().body(response);
	}
	
    @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        // 세션 무효화 등 로그아웃 처리 로직 추가해야함
    	
        // 로그아웃에 성공하면 아래 성공 메시지를 반환함
        return ResponseEntity.ok().body("로그아웃되었습니다.");
        // return ResponseEntity.badRequest().body("로그아웃에 실패했습니다.");
    }
    
    @GetMapping("/login")
    public ResponseEntity<String> login(@RequestParam("user_email") String user_email, 
                                        @RequestParam("user_pw") String user_pw,
                                        @RequestParam("accept") int accept) {
        // 전달된 파라미터 값을 확인하여 로그인 여부를 결정합니다.
        if ("example@example.com".equals(user_email) && 
            "password123".equals(user_pw) &&
            accept == 0 && accept == 1) {
            // 로그인 성공
            return ResponseEntity.ok().body("로그인되었습니다.");
        } else {
            // 로그인 실패
            return ResponseEntity.badRequest().body("로그인에 실패하였습니다.");
        }
    }
    
    // 회원가입 
    @PostMapping("/registration")
    public ResponseEntity<String> regUser(CustomerDTO dto) {
    	log.info("POST reg customer: " + dto.toString());
    	
    	// 고객 정보를 생성하여 DTO에 설정
    	dto.setJoin_date("2024-02-14");
        dto.setUser_email("abcd@domain.com");
        dto.setUser_pw("password");
        dto.setName("CU12 ");
        dto.setBirthday("2000-01-01");
        dto.setPhone_number("010");
        dto.setLicense_number("ABC123456");
        dto.setCredit_card_company("Company");
        dto.setCredit_card_number("1234-5678-9012-3451");
        dto.setPoint(1000);
        dto.setAccept(0);
        dto.setRemark("Remark ");
        int success = customersService.addCustomer(dto);
    	
        if (success == 1) {
            // 회원가입 성공 시 201 Created 상태코드와 메시지 반환
            return ResponseEntity.status(HttpStatus.CREATED).body("회원가입이 완료되었습니다.");
        } else {
            // 회원가입 실패 시 400 Bad Request 상태코드와 메시지 반환
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입에 실패하였습니다.");
        }
    }
    
}
    