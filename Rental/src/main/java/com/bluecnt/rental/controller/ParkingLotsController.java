package com.bluecnt.rental.controller;

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
@RequestMapping("/rental")
public class ParkingLotsController {
	
	@Autowired
	ParkingLotsService parkinglotsService;
	ParkingLotDTO dto;
	
	@GetMapping("/parking-lots-mgmt")
	public String parkingLotsList(
		PagingVO vo, Model model,
		@RequestParam(value="category", required=false) String category,
	    @RequestParam(value="searchText", required=false, defaultValue="") String searchText,
	    @RequestParam(value="currPage", required=false) String currPage,
	    @RequestParam(value="cntPerPage", required=false) String cntPerPage) {
		log.info(category);
		int total = parkinglotsService.countParkingLots();
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
	@GetMapping("/parking-lots-mgmt/update/{pl_id}")
	public String getUpdateForm(@PathVariable int pl_id, Model model) {
	    // 해당 pl_id에 해당하는 고객 정보를 서비스로부터 가져와서 모델에 추가합니다.
	    model.addAttribute("parkinglot", parkinglotsService.getParkingLotById(pl_id));
	    
	    // 로깅을 통해 주차장 정보를 확인합니다.
	    log.info("ParkingLot: " + model.getAttribute("parkinglot"));
	    return "parking-lots-mgmt/update"; 
	}
	
	// 주차장정보 수정하기
    @PostMapping("/parking-lots-mgmt/update/{pl_id}")
    public String updateParkingLot(@PathVariable int pl_id, 
    		@ModelAttribute ParkingLotDTO dto, Model model) {
    	parkinglotsService.updateParkingLot(dto);
        log.info("업뎃dto: " + dto);
        return "redirect:/rental/parking-lots-mgmt/update/" + pl_id;
    }
    
    // 주차장삭제
    @GetMapping("/parking-lots-mgmt/delete/{pl_id}")
    public String deleteParkingLot(@PathVariable int pl_id) {
        parkinglotsService.deleteParkingLot(pl_id);
        log.info("삭제한 pl_id: " + pl_id);
        return "redirect:/rental/parking-lots-mgmt";
    }
    
    // 주차장추가 양식페이지
    @GetMapping("/parking-lots-mgmt/add")
    public String getAddForm(Model model) {
    	model.addAttribute("parkinglot", new ParkingLotDTO()); // 빈 ParkingLotDTO를 모델에 추가
    	log.info("GET add parkinglot form");
    	return "/parking-lots-mgmt/add";
    }
    
    // 주차장추가하기 
    @PostMapping("/parking-lots-mgmt/add")
    public String addParkingLot(ParkingLotDTO dto) {
    	log.info("POST add ParkingLot: " + dto.toString());
    	
    	// 추가할 주차장 숫자를 count에서 설정할 수 있다
    	int count = 10;
    	
    	// 주차장 정보를 생성하여 DTO에 설정
    	for (int i = 0; i < count; i++) {
    	dto.setReg_date("2024-02-14");
        dto.setName("ParkingLot " + i);
        dto.setAddress("구리시 교문동");
        dto.setLatitude(i);
        dto.setLongitude(i);
        dto.setPl_desc("" + i);
        dto.setRemark("Remark " + i);
        parkinglotsService.addParkingLot(dto);
    	}
    	
    	return "redirect:/rental/parking-lots-mgmt"; // 추가 후 목록 페이지로 리다이렉트
    }
    
}