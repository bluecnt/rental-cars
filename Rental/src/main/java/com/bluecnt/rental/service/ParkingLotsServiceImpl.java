package com.bluecnt.rental.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluecnt.rental.dto.ParkingLotDTO;
import com.bluecnt.rental.mapper.ParkingLotsMapper;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class ParkingLotsServiceImpl implements ParkingLotsService {
	
	@Autowired
	ParkingLotsMapper parkingLotsMapper;
	
	// 고객 총 인원
	@Override
	public int countParkingLot() {
		return parkingLotsMapper.countParkingLot();
	}
	
	// 페이징 처리된 고객정보조회
	@Override
	public List<ParkingLotDTO> selectParkingLots(PagingVO vo) {
		return parkingLotsMapper.selectParkingLots(vo);
	}
	
	// 페이징 처리된 카테고리, 검색에 해당하는 고객정보조회
	@Override
	public List<ParkingLotDTO> searchParkingLots(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText) {
	    return parkingLotsMapper.searchParkingLots(vo, category, searchText);
	}
	
	// 고객정보수정 페이지에서 단일고객정보를 보여주는 기능
	@Override
	public List<ParkingLotDTO> getParkingLotById(int pl_id) {
		return parkingLotsMapper.getParkingLotById(pl_id);
	}
	
	// 고객정보수정
	@Override
	public void updateParkingLot(ParkingLotDTO dto) {
		parkingLotsMapper.updateParkingLot(dto);
	}
	
	// 고객정보삭제
	@Override
	public int deleteParkingLot(@Param("pl_id") int pl_id) {
	    try {
	        return parkingLotsMapper.deleteParkingLot(pl_id);
	    } catch (Exception e) {
	        log.error("Error deleting parkingLots: " + e.getMessage());
	        return 0; // 삭제 실패
	    }
	}
	
	// 고객정보추가
	@Override
	public int addParkingLot(ParkingLotDTO dto) {
		try {
			return parkingLotsMapper.addParkingLot(dto);
		} catch (Exception e) {
			log.error("Error adding parkingLot: " + e.getMessage());
			return 0; // 실패
		}
	}
}