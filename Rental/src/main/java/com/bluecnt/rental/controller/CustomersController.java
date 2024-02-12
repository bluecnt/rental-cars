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

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.mapper.CustomersMapper;
import com.bluecnt.rental.service.CustomersService;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/rental")
public class CustomersController {
	
	@Autowired
	CustomersService customersService;
	CustomersMapper customersMapper;
	CustomerDTO dto;
	
	@GetMapping("/customers-mgmt")
	public String customersList(
		PagingVO vo, Model model,
		@RequestParam(value="category", required=false) String category,
	    @RequestParam(value="searchText", required=false, defaultValue="") String searchText,
	    @RequestParam(value="currPage", required=false) String currPage,
	    @RequestParam(value="cntPerPage", required=false) String cntPerPage) {
		log.info(category);
		int total = customersService.countCustomer();
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
		
		if ("user_email".equals(category) && !searchText.isEmpty()) { // searchText 칸이 비어있지 않을 때
			model.addAttribute("customers", customersService.searchCustomer(vo, category, searchText));
	        log.info("user_email일때" + model);
		} else if ("name".equals(category) && !searchText.isEmpty()) {
			model.addAttribute("customers", customersService.searchCustomer(vo, category, searchText));
			log.info("name일때" + model);
		} else if ("phone_number".equals(category) && !searchText.isEmpty()) {
			model.addAttribute("customers", customersService.searchCustomer(vo, category, searchText));
			log.info("phone_number일때" + model);
	    } else { // searchText 칸이 비어있을 때
	        model.addAttribute("customers", customersService.selectCustomer(vo));
	    }
		
		log.info("category:" + category);
		log.info("searchText:" + searchText);
		log.info("PagingVO: " + vo);
		log.info("Customers: " + model.getAttribute("customers"));
		return "/customers-mgmt/list";
	}
	
	// 고객정보 표시
	@GetMapping("/customers-mgmt/update/{cust_id}")
	public String getUpdateForm(@PathVariable int cust_id, Model model) {
	    // 해당 cust_id에 해당하는 고객 정보를 서비스로부터 가져와서 모델에 추가합니다.
	    model.addAttribute("customer", customersService.getCustomerById(cust_id));
	    
	    // 로깅을 통해 고객 정보를 확인합니다.
	    log.info("Customer: " + model.getAttribute("customer"));
	    return "customers-mgmt/update"; 
	}
	
	// 고객정보 수정하기
    @PostMapping("/customers-mgmt/update/{cust_id}")
    public String updateCustomer(@PathVariable int cust_id, 
    		@ModelAttribute CustomerDTO dto, Model model) {
        customersService.updateCust(dto);
        log.info("업뎃dto: " + dto);
        return "redirect:/rental/customers-mgmt/update/" + cust_id;
    }
    
    // 고객삭제
    @GetMapping("/customers-mgmt/delete/{cust_id}")
    public String deleteCustomer(@PathVariable int cust_id) {
        customersService.deleteCustomer(cust_id);
        log.info("삭제한 cust_id: " + cust_id);
        return "redirect:/rental/customers-mgmt";
    }
    
    // 고객추가 양식페이지
    @GetMapping("/customers-mgmt/add")
    public String getAddForm(Model model) {
    	model.addAttribute("customer", new CustomerDTO()); // 빈 CustomerDTO를 모델에 추가
    	log.info("GET add customer form");
    	return "/customers-mgmt/add";
    }
    
    // 고객추가하기 
    @PostMapping("/customers-mgmt/add")
    public String addCustomer(CustomerDTO dto) {
    	log.info("POST add customer: " + dto.toString());
    	
    	// 추가할 고객 숫자를 count에서 설정할 수 있다
    	int count = 100;
    	
    	// 고객 정보를 생성하여 DTO에 설정
    	for (int i = 0; i < count; i++) {
    	dto.setJoin_date("2024-02-14");
        dto.setUser_email("example" + i + "@domain.com");
        dto.setUser_pw("password" + i);
        dto.setName("Customer " + i);
        dto.setBirthday("2000-01-01");
        dto.setPhone_number("010-4567-8900");
        dto.setLicense_number("ABC123456");
        dto.setCredit_card_company("Company" + i);
        dto.setCredit_card_number("1234-5678-9012-3451");
        dto.setPoint(1000);
        dto.setRemark("Remark " + i);
        customersService.addCustomer(dto);
    	}
    	
    	return "redirect:/rental/customers-mgmt"; // 추가 후 목록 페이지로 리다이렉트
    }
    
}
