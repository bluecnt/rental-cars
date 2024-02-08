package com.bluecnt.rental.service;

import java.util.List;
import java.util.Optional;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluecnt.rental.dto.CustomerDTO;
import com.bluecnt.rental.mapper.CustomersMapper;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class CustomersServiceImpl implements CustomersService {
	
	@Autowired
	CustomersMapper customersMapper;
	CustomerDTO customerDTO;
	
	// 고객 총 인원
	@Override
	public int countCustomer() {
		return customersMapper.countCustomer();
	}
	
	// 페이징 처리된 고객정보조회
	@Override
	public List<CustomerDTO> selectCustomer(PagingVO vo) {
		return customersMapper.selectCustomer(vo);
	}
	
	// 페이징 처리된 카테고리, 검색에 해당하는 고객정보조회
	@Override
	public List<CustomerDTO> searchCustomer(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText) {
	    return customersMapper.searchCustomer(vo, category, searchText);
	}
	
	// 고객정보수정 페이지에서 단일고객정보를 보여주는 기능
	@Override
	public List<CustomerDTO> getCustomerById(int cust_id) {
		return customersMapper.getCustomerById(cust_id);
	}
	
	// 고객정보수정
	@Override
	public int updateCustomer(CustomerDTO dto) {
		return 0;
	}
	
	// 고객정보삭제
	@Override
	public int deleteCustomer(int cust_id) {
		return 0;
	}
	
	// 고객정보추가
	@Override
	public int addCustomer(CustomerDTO dto) {
		try {
			return customersMapper.addCustomer(dto);
		} catch (Exception e) {
			log.error("Error adding customer: " + e.getMessage());
			return 0; // 실패
		}
	}
}
