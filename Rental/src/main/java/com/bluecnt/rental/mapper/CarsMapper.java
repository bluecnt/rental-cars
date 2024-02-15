package com.bluecnt.rental.mapper;

import java.util.List;

import com.bluecnt.rental.dto.VehicleDTO;

public interface CarsMapper {
	
	List<VehicleDTO> getAll();
}
