package com.bluecnt.rental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.mapper.CustomersMapper;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class CustomersServiceImpl implements CustomersService {
	
	@Autowired
	CustomersMapper customersMapper;
	
	@Override
	public int countCustomer() {
		return customersMapper.countCustomer();
	}
	
	@Override
	public List<CustomerDTO> selectCustomer(PagingVO vo) {
		return customersMapper.selectCustomer(vo);
	}
	
	@Override
	public int addCustomer(CustomerDTO dto) {
		try {
			return customersMapper.addCustomer(dto);
		} catch (Exception e) {
			log.error("Error adding customer: " + e.getMessage());
			return 0; // 실패
		}
	}
	
	@Override
	public void customersList(Model model) {
		List<CustomerDTO> customers = customersMapper.getAll();
		model.addAttribute("customers", customers); // Attribute로 list를 모델에 추가함
	}
	
	@Override
	public CustomerDTO getCustomerById(int cust_id) {
		try {
			return customersMapper.getCustomerById(cust_id);
		} catch (Exception e) {
			log.error("Error getting customer by ID: " + e.getMessage());
			return null;
		}
	}
	
	@Override
	public int updateCustomer(int cust_id, CustomerDTO dto) {
	    try {
	        // 기존에 저장된 고객 정보를 불러옴
	        CustomerDTO existingCustomer = customersMapper.getCustomerById(cust_id);
	        
	        // 불러온 고객 정보가 없으면 업데이트 실패
	        if (existingCustomer == null) {
	            log.error("Customer not found for update, cust_id: " + cust_id);
	            return 0; // 실패
	        }
	        
	        // 새로운 정보로 기존 고객 정보 업데이트
	        existingCustomer.setUser_pw(dto.getUser_pw());
	        existingCustomer.setName(dto.getName());
	        existingCustomer.setBirthday(dto.getBirthday());
	        existingCustomer.setPhone_number(dto.getPhone_number());
	        existingCustomer.setLicense_number(dto.getLicense_number());
	        existingCustomer.setCredit_card_company(dto.getCredit_card_company());
	        existingCustomer.setCredit_card_number(dto.getCredit_card_number());
	        existingCustomer.setPoint(dto.getPoint());
	        existingCustomer.setRemark(dto.getRemark());
	        
	        // 업데이트 수행
	        return customersMapper.updateCustomer(cust_id, existingCustomer);
	    } catch (Exception e) {
	        log.error("Error updating customer: " + e.getMessage());
	        return 0; // 실패
	    }
	}
	
	@Override
	public int deleteCustomer(int cust_id) {
		return 0;
	}
	
}
