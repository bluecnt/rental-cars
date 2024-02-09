package com.bluecnt.rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.bluecnt.rental.mapper.ParkingLotsMapper;

import lombok.extern.log4j.Log4j;

@Log4j
@Service
public class ParkingLotsServiceImpl implements ParkingLotsService {
	
	@Autowired
	ParkingLotsMapper parkinglotsMapper;
	
	@Override
	public void parkinglotsList(Model model) {
		model.addAttribute("parkinglots", parkinglotsMapper.getAll());
	}
}
	

