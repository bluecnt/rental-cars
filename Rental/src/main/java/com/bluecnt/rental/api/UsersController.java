package com.bluecnt.rental.api;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	// # 로그인
	@PostMapping(value="/login",produces = "application/json; charset=UTF-8") 
	public ResponseEntity<Map<String,Object>> postLogin(@RequestBody CustomerDTO dto) {
		dto.setUser_email("test");
		dto.setUser_pw("1234");
		log.info("postLogin dto: " + dto);
		
		Map<String, String> data = new LinkedHashMap<>();
		Map<String, Object> resp = new LinkedHashMap<>();
		data.put("user_email", dto.getUser_email());
		data.put("user_pw", dto.getUser_pw());
		
	    resp.put("result", "ok");
	    resp.put("message", "~");
	    resp.put("data", data);

        return ResponseEntity.status(HttpStatus.OK).body(resp);
	}
	
	// # 로그아웃
	@GetMapping(value = "/logout", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> getLogout() {
		log.info("getLogout");
		
		Map<String, Object> resp = new LinkedHashMap<>();
		resp.put("result", "ok");
		resp.put("message", "~");
		
		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}
	
	// # 로그인 상태 얻기
	@GetMapping(value = "/login", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> getLogin() {
		log.info("getLogin");
	    
		Map<String, Object> resp = new LinkedHashMap<>();
		resp.put("result", "ok");
		resp.put("message", "~");
	    return ResponseEntity.status(HttpStatus.OK).body(resp);
	}
    
    // # 회원 가입 요청
    @PostMapping(value="/registration",produces = "application/json; charset=UTF-8")
    public ResponseEntity<Map<String, Object>> postReg(@RequestBody CustomerDTO dto) {
    	log.info("POST reg customer: " + dto.toString());
    	
    	// 고객 정보를 생성하여 DTO에 설정
        dto.setUser_email("abcd@domain.com");
        dto.setUser_pw("pass1234");
        dto.setJoin_date("2024-02-14");
        dto.setName("한국인");
        dto.setBirthday("2000-01-01");
        dto.setPhone_number("010-5212-1424");
        dto.setLicense_number("21-19-174133-01");
        dto.setCredit_card_company("Company");
        dto.setCredit_card_number("1234-5678-9012-3451");
        dto.setPoint(1000);
        dto.setAccept(0);
        dto.setRemark("특이사항");
        
        // 기존에 있던 customersService.addCustomer를 
        // 이용하면 실제로 더미데이터가 들어가는걸 볼 수 있다 
        customersService.addCustomer(dto);
		Map<String, Object> resp = new LinkedHashMap<>();
		
	    resp.put("result", "ok");
	    resp.put("message", "승인 요청 중..");
    	
        // 회원가입 성공 시 200 OK
        return ResponseEntity.status(HttpStatus.OK).body(resp);
    }
    
}
    