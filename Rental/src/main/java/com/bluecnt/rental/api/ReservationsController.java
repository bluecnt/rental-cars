package com.bluecnt.rental.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bluecnt.rental.dto.ReservationDTO;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/api")
public class ReservationsController {

	// # 예약추가
	@PostMapping(value = "/reservations", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> postReservation(@RequestBody ReservationDTO dto) {
		Map<String, Object> resp = this.getReservationsDummyData(dto);

		System.out.println(dto.toString());

		// 예약추가 성공 시 200 OK
		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}

	// # 예약 리스트 얻기
	@GetMapping(value = "/reservations", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> getReservationsList(@RequestParam int cust_id) {
		System.out.println("cust_id: " + cust_id);
		
		Map<String, Object> resp = this.getReservationListDummyData(cust_id);

		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}

	Map<String, Object> getReservationsDummyData(ReservationDTO dto) {
		Map<String, Object> resp = new LinkedHashMap<>();

		resp.put("result", "ok");
		resp.put("message", "~");

		return resp;
	}

	Map<String, Object> getReservationListDummyData(int cust_id) {
		// 응답 데이터 생성
		Map<String, Object> resp = new LinkedHashMap<>();

		List<Map<String, Object>> list = new ArrayList<>();

		Map<String, Object> item = new HashMap();
		
		item.put("rent_id", 0);

		Map<String, Object> v_data = new HashMap<>();
		v_data.put("img", "~");
		v_data.put("name", "아반떼CN7");
		v_data.put("start_time", "2024-02-27T20:00:00+09:00");
		v_data.put("end_time", "2024-02-27T21:00:00+09:00");
		v_data.put("driving_status", 0);

		item.put("vehicle", v_data);
		
		list.add(item);
		

		resp.put("result", "ok");
		resp.put("message", "");
		resp.put("data", list);

		return resp;

	}

	// genPeservations 예약 내용 생성 메서드(더미정보)
	private List<Map<String, Object>> genReservations() {
		List<Map<String, Object>> data = new ArrayList<>();

		// 예약 정보 생성
		List<Map<String, Object>> rent = new ArrayList<>();
		Map<String, Object> rent1 = new LinkedHashMap<>();
		rent1.put("rent_id", 1);
		rent.add(rent1);

		// 예약된 차량 정보 생성
		List<Map<String, Object>> vehicles = new ArrayList<>();
		Map<String, Object> vehicle1 = new LinkedHashMap<>();
		vehicle1.put("rent_id", 1);
		vehicle1.put("v_img", "https://url.kr/h4ka9y");
		vehicle1.put("name", "모닝");
		vehicle1.put("start_time", "2024-02-23 09:00");
		vehicle1.put("end_time", "2024-02-23 18:00");
		vehicle1.put("drivitng_status", 0); // (0)운행 전, (1)운행 중, (2)운행 종료
		vehicles.add(vehicle1);

		// 두대 예약해서 다른 한대 정보일 경우
		Map<String, Object> vehicle2 = new LinkedHashMap<>();
		vehicle2.put("rent_id", 2);
		vehicle2.put("v_img", "https://url.kr/h4ka9y");
		vehicle2.put("name", "모닝");
		vehicle2.put("start_time", "2024-02-23 09:00");
		vehicle2.put("end_time", "2024-02-23 18:00");
		vehicle2.put("driving_status", 0); // (0)운행 전, (1)운행 중, (2)운행 종료
		vehicles.add(vehicle2);

		rent1.put("vehicles", vehicles);
		data.add(rent1);
		return data;
	}

}
