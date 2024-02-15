package com.bluecnt.rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.bluecnt.rental.mapper.CarsMapper;

@Service
public class CarsServiceImpl implements CarsService {
	
	@Autowired
	CarsMapper carsMapper;
	
	@Override
	public void carsList(Model model) {
		model.addAttribute("cars", carsMapper.getAll());
	}
	
}
