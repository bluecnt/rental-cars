package com.bluecnt.rental.api;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bluecnt.rental.service.ParkingLotsService;
import com.bluecnt.rental.service.VehiclesService;

import lombok.extern.log4j.Log4j;

@Log4j
@RestController
@RequestMapping("/api")
public class VehicleController {

	@Autowired
	VehiclesService vehiclesService;
	ParkingLotsService parkingLotsService;

	@GetMapping(value = "/vehicle-list", produces = "application/json; charset=UTF-8")
	public ResponseEntity<Map<String, Object>> getVehicleList(@RequestParam String address, @RequestParam String radius,
			@RequestParam String start_time, @RequestParam String end_time) {

		log.info(address);
		log.info(radius);
		log.info(start_time);
		log.info(end_time);

		// 응답 데이터 생성
		Map<String, Object> resp = new LinkedHashMap<>();
		resp.put("result", "ok");
		resp.put("message", "검색 성공");
		resp.put("data", genParking_lots());

		//log.info(resp);

		return ResponseEntity.status(HttpStatus.OK).body(resp);
	}

	// genParking_lots 생성 메서드
	private Map<String, Object> genParking_lots() {
		return this.getDummyData();
	}

	// 더미 데이터
	private Map<String, Object> getDummyData() {
		Map<String, Object> data = new LinkedHashMap<>();
		List<Map<String, Object>> parkingLots = new ArrayList<>();

		// ------------------------------------------------------------------
		// 구리역
		// ------------------------------------------------------------------
		{
			// 주차장 정보 생성
			Map<String, Object> parkingLot1 = new LinkedHashMap<>();
			parkingLot1.put("pl_id", 0);
			parkingLot1.put("name", "구리역");
			parkingLot1.put("address", "경기도 구리시 건원대로34번길 32-29 구리역사");
			parkingLot1.put("latitude", 37.6033337);
			parkingLot1.put("longitude", 127.1436109);
			parkingLot1.put("pl_desc", "첫 주차장 입니다");
			parkingLot1.put("vehicle_usable_count", 3);
			parkingLots.add(parkingLot1);

			// 차량 정보 생성
			List<Map<String, Object>> vehicles = new ArrayList<>();
			Map<String, Object> vehicle1 = new LinkedHashMap<>();
			vehicle1.put("vehicle_id", 0);
			vehicle1.put("name", "아반떼CN7");
			vehicle1.put("v_img", "https://url.kr/h4ka9y");
			vehicle1.put("plate_number", "58허4190");
			vehicle1.put("options", "디젤");
			vehicle1.put("price_per_hour", 5000);
			vehicle1.put("price_per_km", 200);
			vehicle1.put("v_desc", "기타사항없음");
			//
			vehicle1.put("usable", true);
			vehicle1.put("reg_id", 0);
			//
			vehicles.add(vehicle1);

			Map<String, Object> vehicle2 = new LinkedHashMap<>();
			vehicle2.put("vehicle_id", 1);
			vehicle2.put("name", "쏘나타DN8");
			vehicle2.put("v_img", "https://url.kr/6o2tzw");
			vehicle2.put("plate_number", "23하5566");
			vehicle2.put("options", "디젤");
			vehicle2.put("price_per_hour", 6000);
			vehicle2.put("price_per_km", 210);
			vehicle2.put("v_desc", "비싼차");
			//
			vehicle2.put("usable", true);
			vehicle2.put("reg_id", 1);
			//
			vehicles.add(vehicle2);

			Map<String, Object> vehicle3 = new LinkedHashMap<>();
			vehicle3.put("vehicle_id", 2);
			vehicle3.put("name", "그랜저GN7");
			vehicle3.put("v_img", "https://url.kr/6o2tzw");
			vehicle3.put("plate_number", "23하5566");
			vehicle3.put("options", "디젤");
			vehicle3.put("price_per_hour", 7000);
			vehicle3.put("price_per_km", 220);
			vehicle3.put("v_desc", "비싼차");
			//
			vehicle3.put("usable", true);
			vehicle3.put("reg_id", 0);
			//
			vehicles.add(vehicle3);

			// 다른 주차장 정보 및 차량 정보 추가
			data.put("parking_lots", parkingLots);
			parkingLot1.put("vehicles", vehicles);
		}
		
		// ------------------------------------------------------------------
		// 도농역
		// ------------------------------------------------------------------
		{
			// 주차장 정보 생성
			Map<String, Object> parkingLot1 = new LinkedHashMap<>();
			parkingLot1.put("pl_id", 1);
			parkingLot1.put("name", "도농역");
			parkingLot1.put("address", "경기도 남양주시 경춘로 433");
			parkingLot1.put("latitude", 0);
			parkingLot1.put("longitude", 0);
			parkingLot1.put("pl_desc", "첫 주차장 입니다");
			parkingLot1.put("vehicle_usable_count", 3);
			parkingLots.add(parkingLot1);

			// 차량 정보 생성
			List<Map<String, Object>> vehicles = new ArrayList<>();
			Map<String, Object> vehicle1 = new LinkedHashMap<>();
			vehicle1.put("vehicle_id", 10);
			vehicle1.put("name", "G70");
			vehicle1.put("v_img", "https://url.kr/h4ka9y");
			vehicle1.put("plate_number", "58허4190");
			vehicle1.put("options", "디젤");
			vehicle1.put("price_per_hour", 10000);
			vehicle1.put("price_per_km", 300);
			vehicle1.put("v_desc", "기타사항없음");
			//
			vehicle1.put("usable", true);
			vehicle1.put("reg_id", 3);
			//
			vehicles.add(vehicle1);

			Map<String, Object> vehicle2 = new LinkedHashMap<>();
			vehicle2.put("vehicle_id", 11);
			vehicle2.put("name", "G80");
			vehicle2.put("v_img", "https://url.kr/6o2tzw");
			vehicle2.put("plate_number", "23하5566");
			vehicle2.put("options", "디젤");
			vehicle2.put("price_per_hour", 11000);
			vehicle2.put("price_per_km", 310);
			vehicle2.put("v_desc", "비싼차");
			//
			vehicle2.put("usable", !true);
			vehicle2.put("reg_id", 4);
			//
			vehicles.add(vehicle2);

			Map<String, Object> vehicle3 = new LinkedHashMap<>();
			vehicle3.put("vehicle_id", 2);
			vehicle3.put("name", "G90");
			vehicle3.put("v_img", "https://url.kr/6o2tzw");
			vehicle3.put("plate_number", "23하5566");
			vehicle3.put("options", "디젤");
			vehicle3.put("price_per_hour", 12000);
			vehicle3.put("price_per_km", 320);
			vehicle3.put("v_desc", "비싼차");
			//
			vehicle3.put("usable", !true);
			vehicle3.put("reg_id", 5);
			//
			vehicles.add(vehicle3);

			// 다른 주차장 정보 및 차량 정보 추가
			data.put("parking_lots", parkingLots);
			parkingLot1.put("vehicles", vehicles);
		}
		
		// ------------------------------------------------------------------
		// 인창고
		// ------------------------------------------------------------------
		{
			// 주차장 정보 생성
			Map<String, Object> parkingLot1 = new LinkedHashMap<>();
			parkingLot1.put("pl_id", 2);
			parkingLot1.put("name", "인창고등학교");
			parkingLot1.put("address", "경기 구리시 왕숙천로 339 인창고등학교");
			parkingLot1.put("latitude", 0);
			parkingLot1.put("longitude", 0);
			parkingLot1.put("pl_desc", "첫 주차장 입니다");
			parkingLot1.put("vehicle_usable_count", 0);
			parkingLots.add(parkingLot1);

			// 차량 정보 생성
			List<Map<String, Object>> vehicles = new ArrayList<>();
			Map<String, Object> vehicle1 = new LinkedHashMap<>();
			vehicle1.put("vehicle_id", 10);
			vehicle1.put("name", "G70");
			vehicle1.put("v_img", "https://url.kr/h4ka9y");
			vehicle1.put("plate_number", "58허4190");
			vehicle1.put("options", "디젤");
			vehicle1.put("price_per_hour", 10000);
			vehicle1.put("price_per_km", 300);
			vehicle1.put("v_desc", "기타사항없음");
			//
			vehicle1.put("usable", !true);
			vehicle1.put("reg_id", 3);
			//
			vehicles.add(vehicle1);

			// 다른 주차장 정보 및 차량 정보 추가
			data.put("parking_lots", parkingLots);
			parkingLot1.put("vehicles", vehicles);
		}

		return data;
	}
}