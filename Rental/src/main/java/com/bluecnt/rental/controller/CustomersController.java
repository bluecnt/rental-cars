package com.bluecnt.rental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.service.CustomersService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
public class CustomersController {
	
	@Autowired
	CustomersService customersService;
	
	@GetMapping("/customers-mgmt")
	public String getList(Model model) {
		log.info("GET list");
		customersService.customersList(model);
		return "/customers-mgmt/list";
	}
	
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
		
		// 서비스 레이어를 통해 고객 추가
		customersService.addCustomer(dto);
		
		return "redirect:/customers-mgmt"; // 추가 후 목록 페이지로 리다이렉트
	}
	
	@GetMapping("/customers-mgmt/update/{cust_id}")
    public String getUpdateForm(@PathVariable int cust_id, Model model) {
        CustomerDTO customer = customersService.getCustomerById(cust_id);
        
        if (customer == null) {
            // 존재하지 않는 고객에 대한 예외 처리 또는 메시지 처리
            return "redirect:/customers-mgmt";
        }

        model.addAttribute("customer", customer);
        //log.info("GET update customer form for cust_id: {}", cust_id);
        return "/customers-mgmt/update";
    }

    @PutMapping("/customers-mgmt/update/{cust_id}")
    public String updateCustomer(@PathVariable int cust_id, @ModelAttribute CustomerDTO dto) {
       // log.info("Update customer: {}", dto);

        customersService.updateCustomer(cust_id, dto);

        return "redirect:/customers-mgmt";
    }
}