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
import com.bluecnt.rental.dto.LoginDTO;
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
	public ResponseEntity<Map<String,Object>> postLogin(@RequestBody LoginDTO dto) {
		Map<String, Object> resp = this.getLoginDummyData(dto);
		
		System.out.println(dto.toString());

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
    	Map<String, Object> resp = this.getRestrationDummyData(dto);
    	
    	System.out.println(dto.toString());
    	
        // 회원가입 성공 시 200 OK
        return ResponseEntity.status(HttpStatus.OK).body(resp);
    }
    
    
    private Map<String, Object> getLoginDummyData(LoginDTO dto) {
		Map<String, Object> data = new LinkedHashMap<>();
		Map<String, Object> resp = new LinkedHashMap<>();
		
		data.put("cust_id", 0);
		data.put("credit_card_company", "국민카드");
		data.put("credit_card_number", "0000-0000-0000-0000");		
		
	    resp.put("result", "ok");
	    resp.put("message", "~");
	    resp.put("data", data);
	    
	    return resp;
    }
    
    private Map<String, Object> getRestrationDummyData(CustomerDTO dto) {
		Map<String, Object> resp = new LinkedHashMap<>();
		
	    resp.put("result", "ok");
	    resp.put("message", "승인 요청 중..");
	    
	    return resp;
    }
}
    