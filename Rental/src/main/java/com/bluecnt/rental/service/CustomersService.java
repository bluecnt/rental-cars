package com.bluecnt.rental.service;

import org.springframework.ui.Model;

import com.bluecnt.rental.dto.CustomerDTO;

public interface CustomersService {
	
	int addCustomer(CustomerDTO dto); // Create 
	void customersList(Model model); // Read
	CustomerDTO getCustomerById(int cust_id);
	int updateCustomer(int cust_id, CustomerDTO dto); // Update
	int deleteCustomer(int cust_id); // Delete
	
}


