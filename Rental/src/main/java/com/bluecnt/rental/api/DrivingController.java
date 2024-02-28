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
			@RequestParam int rent_id,
			@RequestParam String control) {
		System.out.println("/drving => rent_id:" + rent_id + ", control:" + control);
		
		Map<String, Object> resp = this.getDrivingStatusDummyData(rent_id, control);

		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}

	Map<String, Object> getDrivingStatusDummyData(int rent_id, String control) {
		Map<String, Object> resp = new LinkedHashMap<>();
		resp.put("result", "ok");
		resp.put("message", "~");

		return resp;
	}
}