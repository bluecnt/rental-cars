package com.bluecnt.rental.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bluecnt.rental.dto.CustomerDTO;

public interface CustomersMapper {

	int addCustomer(CustomerDTO dto); // Create
	List<CustomerDTO> getAll(); // Read
	int updateCustomer(@Param("cust_id") int cust_id, @Param("customer") CustomerDTO customer);
	CustomerDTO getCustomerById(int cust_id);
	int deleteCustomer(int cust_id); // Delete
}
