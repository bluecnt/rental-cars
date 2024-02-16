package com.bluecnt.rental.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bluecnt.rental.dto.VehicleDTO;
import com.bluecnt.rental.utils.PagingVO;

public interface VehiclesMapper {
	
	// 차량 총 대수
	public int countVehicle();
	// 페이징 처리된 차량정보조회
	public List<VehicleDTO> selectVehicles(PagingVO vo);
	// 페이징 처리된 카테고리, 검색에 해당하는 차량정보조회
	public List<VehicleDTO> searchVehicles(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText);
	// 차량정보수정 페이지에서 단일차량정보를 보여주는 기능
	public List<VehicleDTO> getVehicleById(int vehicle_id);
	// 차량정보수정 
	public void updateVehicle(VehicleDTO dto);
	// 차량정보삭제
	int deleteVehicle(@Param("vehicle_id") int vehicle_id);
	// 차량정보추가
	int addVehicle(VehicleDTO dto);
	
}
