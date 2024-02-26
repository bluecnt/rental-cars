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
	    
    @GetMapping(value="/vehicle-list", produces = "application/json; charset=UTF-8")
    public ResponseEntity<Map<String,Object>> getVehicleList(
    		@RequestParam String address,
    		@RequestParam String radius,
    		@RequestParam String start_time,
    		@RequestParam String end_time
    ) {
    	
    	log.info(address);
    	log.info(radius);
    	log.info(start_time);
    	log.info(end_time);
    	
        // 응답 데이터 생성
        Map<String, Object> resp = new LinkedHashMap<>();
        resp.put("result", "ok");
        resp.put("message", "검색 성공");
        resp.put("data", genParking_lots());
        
        log.info(resp);
        
        return ResponseEntity.status(HttpStatus.OK).body(resp);
    }
    
    // genParking_lots 생성 메서드
    private Map<String, Object> genParking_lots() {
    	Map<String, Object> data = new LinkedHashMap<>();
    	
        // 주차장 정보 생성
        List<Map<String, Object>> parkingLots = new ArrayList<>();
        Map<String, Object> parkingLot1 = new LinkedHashMap<>();
        parkingLot1.put("pl_id", 1);
        parkingLot1.put("name", "구리역 블루");
        parkingLot1.put("address", "서울시 강남구");
        parkingLot1.put("latitude", "123.456");
        parkingLot1.put("longitude", "232.424");
        parkingLot1.put("pl_desc", "첫 주차장 입니다");
        parkingLot1.put("vehicle_usable_count", 4);
        parkingLots.add(parkingLot1);
        
        // 차량 정보 생성
        List<Map<String, Object>> vehicles = new ArrayList<>();
        Map<String, Object> vehicle1 = new LinkedHashMap<>();
        vehicle1.put("vehicle_id", 1);
        vehicle1.put("name", "모닝");
        vehicle1.put("v_img", "https://url.kr/h4ka9y");
        vehicle1.put("plate_number", "58허4190");
        vehicle1.put("options", "디젤");
        vehicle1.put("price_per_hour", "$10");
        vehicle1.put("price_per_km", "$10");
        vehicle1.put("v_desc", "기타사항없음");
        vehicles.add(vehicle1);
        
        Map<String, Object> vehicle2 = new LinkedHashMap<>();
        vehicle2.put("vehicle_id", 2);
        vehicle2.put("name", "벤츠");
        vehicle2.put("v_img", "https://url.kr/6o2tzw");
        vehicle2.put("plate_number", "23하5566");
        vehicle2.put("options", "디젤");
        vehicle2.put("price_per_hour", "$20");
        vehicle2.put("price_per_km", "$20");
        vehicle2.put("v_desc", "비싼차");
        vehicles.add(vehicle2);
        
        // 다른 주차장 정보 및 차량 정보 추가
        data.put("parking_lots", parkingLots);
        parkingLot1.put("vehicles", vehicles);
        return data;
    }
}