package com.bluecnt.rental.api;

import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/api")
public class DrivingController {
	
//	@Autowired
//	CustomersService customersService;
	
	// # 운행 제어
	@GetMapping(value = "/driving", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> getDrivingStatus(
    		@RequestParam int cust_id,
    		@RequestParam int rent_id,
    		@RequestParam String control
    ) {			
		log.info("driving");
		
		Map<String, Object> resp = new LinkedHashMap<>();
		resp.put("result", "ok");
		resp.put("message", "~");
		
		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}
	
}