package com.bluecnt.rental.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.bluecnt.rental.dto.ParkingLotDTO;
import com.bluecnt.rental.utils.PagingVO;

public interface ParkingLotsMapper {
	
	// 주차장 총 갯수
	public int countParkingLot();
	// 페이징 처리된 주차장정보조회
	public List<ParkingLotDTO> selectParkingLots(PagingVO vo);
	// 페이징 처리된 카테고리, 검색에 해당하는 주차장 정보조회
	public List<ParkingLotDTO> searchParkingLots(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText);
	// 주차장정보수정 페이지에서 단일 주차장 정보를 보여주는 기능
	public List<ParkingLotDTO> getParkingLotById(int pl_id);
	// 주차장 정보수정 
	public void updateParkingLot(ParkingLotDTO dto);
	// 주차장 정보삭제
	int deleteParkingLot(@Param("pl_id") int pl_id);
	// 주차장 정보추가
	int addParkingLot(ParkingLotDTO dto);
	
}
