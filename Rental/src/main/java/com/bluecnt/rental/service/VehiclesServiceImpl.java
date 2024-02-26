package com.bluecnt.rental.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluecnt.rental.dto.VehicleDTO;
import com.bluecnt.rental.mapper.VehiclesMapper;
import com.bluecnt.rental.utils.PagingVO;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class VehiclesServiceImpl implements VehiclesService {
	
	@Autowired
	VehiclesMapper vehiclesMapper;
	
	// 차량 총 대수
	@Override
	public int countVehicle() {
		return vehiclesMapper.countVehicle();
	}
	
	// 페이징 처리된 차량정보조회
	@Override
	public List<VehicleDTO> selectVehicles(PagingVO vo) {
		return vehiclesMapper.selectVehicles(vo);
	}
	
	// 페이징 처리된 카테고리, 검색에 해당하는 차량정보조회
	@Override
	public List<VehicleDTO> searchVehicles(@Param("PagingVO") PagingVO vo,
			@Param("category") String category, @Param("searchText") String searchText) {
	    return vehiclesMapper.searchVehicles(vo, category, searchText);
	}
	
	// 차량정보수정 페이지에서 단일고객정보를 보여주는 기능
	@Override
	public List<VehicleDTO> getVehicleById(int vehicle_id) {
		return vehiclesMapper.getVehicleById(vehicle_id);
	}
	
	// 차량정보수정
	@Override
	public void updateVehicle(VehicleDTO dto) {
		vehiclesMapper.updateVehicle(dto);
	}
	
	// 차량정보삭제
	@Override
	public int deleteVehicle(@Param("vehicle_id") int vehicle_id) {
	    try {
	        return vehiclesMapper.deleteVehicle(vehicle_id);
	    } catch (Exception e) {
	        log.error("Error deleting vehicle: " + e.getMessage());
	        return 0; // 삭제 실패
	    }
	}

	// 차량정보추가
	@Override
	public int addVehicle(VehicleDTO dto) {
		try {
			return vehiclesMapper.addVehicle(dto);
		} catch (Exception e) {
			log.error("Error adding vehicle: " + e.getMessage());
			return 0; // 실패
		}
	}
	
}