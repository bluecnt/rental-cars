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

import com.bluecnt.rental.dto.ParkingLotDTO;
import com.bluecnt.rental.service.ParkingLotsService;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/parking-lots-mgmt")
public class ParkingLotsMgmtController {
	
	@Autowired
	ParkingLotsService parkinglotsService;
	ParkingLotDTO dto;
	
	@GetMapping("")
	public String parkinglotsList(
		PagingVO vo, Model model,
		@RequestParam(value="category", required=false) String category,
	    @RequestParam(value="searchText", required=false, defaultValue="") String searchText,
	    @RequestParam(value="currPage", required=false) String currPage,
	    @RequestParam(value="cntPerPage", required=false) String cntPerPage) {
		log.info(category);
		int total = parkinglotsService.countParkingLot();
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
			model.addAttribute("parkinglots", parkinglotsService.searchParkingLots(vo, category, searchText));
	        log.info("name일때" + model);
		} else if ("address".equals(category) && !searchText.isEmpty()) {
			model.addAttribute("parkinglots", parkinglotsService.searchParkingLots(vo, category, searchText));
			log.info("address일때" + model);
	    } else { // searchText 칸이 비어있을 때
	        model.addAttribute("parkinglots", parkinglotsService.selectParkingLots(vo));
	    }
		
		log.info("category:" + category);
		log.info("searchText:" + searchText);
		log.info("PagingVO: " + vo);
		log.info("Parkinglots: " + model.getAttribute("parkinglots"));
		return "/parking-lots-mgmt/list";
	}
	
	// 주차장정보 표시
	@GetMapping("/update/{pl_id}")
	public String getUpdateForm(@PathVariable int pl_id, Model model) {
	    // 해당 pl_id에 해당하는 주차장 정보를 서비스로부터 가져와서 모델에 추가합니다.
	    model.addAttribute("parkinglots", parkinglotsService.getParkingLotById(pl_id));
	    
	    // 로깅을 통해 주차장 정보를 확인합니다.
	    log.info("parkinglots: " + model.getAttribute("parkinglots"));
	    return "/parking-lots-mgmt/update"; 
	}
	
	// 주차장정보 수정하기
    @PostMapping("/update/{pl_id}")
    public String updateParkingLot(@PathVariable int pl_id, 
    		@ModelAttribute ParkingLotDTO dto, Model model) {
    	parkinglotsService.updateParkingLot(dto);
        log.info("업뎃dto: " + dto);
        return "redirect:/parking-lots-mgmt/update/" + pl_id;
    }
    
    // 주차장정보 삭제하기
    @GetMapping("/delete/{pl_id}")
    public String deleteParkingLot(@PathVariable int pl_id) {
    	parkinglotsService.deleteParkingLot(pl_id);
        log.info("삭제한 pl_id: " + pl_id);
        return "redirect:/parking-lots-mgmt";
    }
    
    // 주차장추가 양식페이지
    @GetMapping("/add")
    public String getAddForm(Model model) {
    	model.addAttribute("parkinglots", new ParkingLotDTO()); // 빈 ParkingLotDTO를 모델에 추가
    	log.info("GET add parkinglots form");
    	return "/parking-lots-mgmt/add";
    }
    
    // 주차장추가하기 
    @PostMapping("/add")
    public String addParkingLot(ParkingLotDTO dto) {
    	log.info("POST add parkinglot: " + dto.toString());
    	
        Date currentDate = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String regDate = formatter.format(currentDate);
        
        // 주차장 정보를 생성하여 DTO에 설정
        dto.setReg_date(regDate);
        dto.setName("구리시공유주차장");
        dto.setAddress("경기구리시 인창동 675-2");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("구리역주차장");
        dto.setAddress("경기구리시 건원대로34번길 32-29");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("제1공영노외주차장");
        dto.setAddress("경기구리시 건원대로34번길 32-29");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("인창동우리주차장");
        dto.setAddress("경기구리시 경춘로227번길 6-26");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("제1공영주차장");
        dto.setAddress("경기구리시 인창동 605-172");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("구리전통시장공영주차장");
        dto.setAddress("경기구리시 검배로6번길 31");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("제5공영주차장");
        dto.setAddress("경기구리시 경춘로248번길 88");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("제2공영주차장");
        dto.setAddress("경기구리시 안골로40");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("대한주차장");
        dto.setAddress("경기구리시 안골로85번길 13-5주차관리소");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
        
        dto.setReg_date(regDate);
        dto.setName("중앙민영주차장");
        dto.setAddress("경기구리시 경춘로 218-5");
        dto.setLatitude("123");
        dto.setLongitude("456");
        dto.setPl_desc("");
        parkinglotsService.addParkingLot(dto);
    	
    	return "redirect:/parking-lots-mgmt"; // 추가 후 목록 페이지로 리다이렉트
    }
    
}