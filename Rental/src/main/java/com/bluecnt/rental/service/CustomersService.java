package com.bluecnt.rental.service;

import java.util.List;

import org.springframework.ui.Model;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.utils.PagingVO;

public interface CustomersService {
	
	// 고객 총 인원
	public int countCustomer();
	// 페이징 처리 고객정보 조회
	public List<CustomerDTO> selectCustomer(PagingVO vo);
	// 고객정보 추가
	int addCustomer(CustomerDTO dto); // Create 
	void customersList(Model model); // Read
	CustomerDTO getCustomerById(int cust_id);
	int updateCustomer(int cust_id, CustomerDTO dto); // Update
	int deleteCustomer(int cust_id); // Delete
	
}


