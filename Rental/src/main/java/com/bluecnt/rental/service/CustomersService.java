package com.bluecnt.rental.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.utils.PagingVO;

public interface CustomersService {
	
	// 고객 총 인원
	public int countCustomer();
	// 페이징 처리된 고객정보조회
	public List<CustomerDTO> selectCustomers(PagingVO vo);
	// 페이징 처리된 카테고리, 검색에 해당하는 고객정보조회
	public List<CustomerDTO> searchCustomers(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText);
	// 고객정보수정 페이지에서 단일고객정보를 보여주는 기능
	public List<CustomerDTO> getCustomerById(int cust_id);
	// 고객정보수정 
	public void updateCust(CustomerDTO dto);
	// 고객정보삭제
	int deleteCustomer(@Param("cust_id") int cust_id);
	// 고객정보추가
	int addCustomer(CustomerDTO dto);
	
	// 고객정보 승인
	public void acceptCust(CustomerDTO dto);
	
}
