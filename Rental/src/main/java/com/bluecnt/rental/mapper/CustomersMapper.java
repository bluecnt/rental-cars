package com.bluecnt.rental.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.utils.PagingVO;

public interface CustomersMapper {

	// 고객 총 인원
	public int countCustomer();
	// 페이징 처리 고객정보 조회
	public List<CustomerDTO> selectCustomer(PagingVO vo);
	// 카테고리 검색 조회
	public List<CustomerDTO> searchCustomer(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText);
	int addCustomer(CustomerDTO dto); // Create
	List<CustomerDTO> getAll(); // Read
	int updateCustomer(@Param("cust_id") int cust_id, @Param("customer") CustomerDTO customer);
	CustomerDTO getCustomerById(int cust_id);
	int deleteCustomer(int cust_id); // Delete
}
