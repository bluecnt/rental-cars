package com.bluecnt.rental.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.bluecnt.rental.dto.VehicleDTO;
import com.bluecnt.rental.service.VehiclesService;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/vehicles-mgmt")
public class VehiclesMgmtController {
	
	@Autowired
	VehiclesService vehiclesService;
	VehicleDTO dto;
	
	@GetMapping("")
	public String vehiclesList(
		PagingVO vo, Model model,
		@RequestParam(value="category", required=false) String category,
	    @RequestParam(value="searchText", required=false, defaultValue="") String searchText,
	    @RequestParam(value="currPage", required=false) String currPage,
	    @RequestParam(value="cntPerPage", required=false) String cntPerPage) {
		log.info(category);
		int total = vehiclesService.countVehicle();
		if (currPage == null && cntPerPage == null) {
				currPage = "1";
				cntPerPage = "5";
		} else if (currPage == null) {
			currPage = "1";
		} else if (cntPerPage == null) {
			cntPerPage = "5";
		}
		
		vo = new PagingVO(
				total, Integer.parseInt(currPage), Integer.parseInt(cntPerPage));
		model.addAttribute("paging", vo);
		
		if ("name".equals(category) && !searchText.isEmpty()) { // searchText 칸이 비어있지 않을 때
			model.addAttribute("vehicles", vehiclesService.searchVehicles(vo, category, searchText));
	        log.info("name일때" + model);
		} else if ("plate_number".equals(category) && !searchText.isEmpty()) {
			model.addAttribute("vehicles", vehiclesService.searchVehicles(vo, category, searchText));
			log.info("plate_number일때" + model);
		} else if ("options".equals(category) && !searchText.isEmpty()) {
			model.addAttribute("vehicles", vehiclesService.searchVehicles(vo, category, searchText));
			log.info("opitons일때" + model);
	    } else { // searchText 칸이 비어있을 때
	        model.addAttribute("vehicles", vehiclesService.selectVehicles(vo));
	    }
		
		log.info("category:" + category);
		log.info("searchText:" + searchText);
		log.info("PagingVO: " + vo);
		log.info("Vehicles: " + model.getAttribute("vehicles"));
		return "/vehicles-mgmt/list";
	}
	
	// 차량정보 뷰 표시(업데이트 뷰)
	@GetMapping("/update/{vehicle_id}")
	public String getUpdateForm(@PathVariable int vehicle_id, Model model) {
	    // 해당 vehicle_id에 해당하는 고객 정보를 서비스로부터 가져와서 모델에 추가합니다.
	    model.addAttribute("vehicle", vehiclesService.getVehicleById(vehicle_id));
	    
	    // 로깅을 통해 차량 정보를 확인합니다.
	    log.info("Vehicle: " + model.getAttribute("vehicle"));
	    return "/vehicles-mgmt/update"; 
	}
	
	// 차량정보 수정하기
    @PostMapping("/update/{vehicle_id}")
    public String updateVehicle(@PathVariable int vehicle_id, 
    		@ModelAttribute VehicleDTO dto, Model model) {
    	vehiclesService.updateVehicle(dto);
        log.info("업뎃dto: " + dto);
        return "redirect:/vehicles-mgmt/update/" + vehicle_id;
    }
    
    // 차량정보 삭제하기
    @GetMapping("/delete/{vehicle_id}")
    public String deleteVehicle(@PathVariable int vehicle_id) {
    	vehiclesService.deleteVehicle(vehicle_id);
        log.info("삭제한 vehicle_id: " + vehicle_id);
        return "redirect:/vehicles-mgmt";
    }
    
    // 차량추가 양식페이지
    @GetMapping("/add")
    public String getAddForm(Model model) {
    	model.addAttribute("vehicle", new VehicleDTO()); // 빈 VehicleDTO를 모델에 추가
    	log.info("GET add vehicle form");
    	return "/vehicles-mgmt/add";
    }
    
    // 차량추가하기 
    @PostMapping("/add")
    public String addVehicle(VehicleDTO dto) {
    	log.info("POST add vehicle: " + dto.toString());
    	
        Date currentDate = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String regDate = formatter.format(currentDate);
        
    	// 차량 정보를 생성하여 DTO에 설정
    	dto.setReg_date(regDate);
        dto.setName("올뉴아반떼");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(10000);
        dto.setPrice_per_km(230);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("올뉴스포티지");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(10000);
        dto.setPrice_per_km(250);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("셀토스");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(10000);
        dto.setPrice_per_km(240);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("K8");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(15000);
        dto.setPrice_per_km(260);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("디올뉴그랜저");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(15000);
        dto.setPrice_per_km(260);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("G70");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(15000);
        dto.setPrice_per_km(260);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("GV70");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(30000);
        dto.setPrice_per_km(300);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("G80");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(30000);
        dto.setPrice_per_km(300);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("GV80");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(30000);
        dto.setPrice_per_km(300);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
        
    	dto.setReg_date(regDate);
        dto.setName("G90");
        dto.setV_img("/resources/vehicles/images/" + dto.getName() + ".jpg");
        dto.setPlate_number("");
        dto.setOptions("");
        dto.setPrice_per_hour(30000);
        dto.setPrice_per_km(300);
        dto.setV_desc("");
        dto.setRemark("");
        vehiclesService.addVehicle(dto);
    	
    	return "redirect:/vehicles-mgmt"; // 추가 후 목록 페이지로 리다이렉트
    }
    
}