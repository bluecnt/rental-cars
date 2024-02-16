package com.bluecnt.rental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bluecnt.rental.mapper.SettingsMapper;

@Service
public class SettingsServiceImpl implements SettingsService {
	
	@Autowired
    private SettingsMapper settingsMapper;

	// Customers Table & Sequence
    public void createCustomersTable() {
        settingsMapper.createCustomersTable();
    }

    public void createCustomersSeq() {
        settingsMapper.createCustomersSeq();
    }

    public void initCustomersTable() {
        settingsMapper.initCustomersTable();
    }

    public void initCustomersSeq() {
        settingsMapper.initCustomersSeq();
    }
    
    public void deleteCustomersTable() {
    	settingsMapper.deleteCustomersTable();
    }
    public void deleteCustomersSeq() {
    	settingsMapper.deleteCustomersSeq();
    }
    
    // Parking-Lots Table & Sequence
    public void createParkingLotsTable() {
        settingsMapper.createParkingLotsTable();
    }

    public void createParkingLotsSeq() {
        settingsMapper.createParkingLotsSeq();
    }

    public void initParkingLotsTable() {
        settingsMapper.initParkingLotsTable();
    }
    public void initParkingLotsSeq() {
        settingsMapper.initParkingLotsSeq();
    }
    
    public void deleteParkingLotsTable() {
    	settingsMapper.deleteParkingLotsTable();
    }
    public void deleteParkingLotsSeq() {
    	settingsMapper.deleteParkingLotsSeq();
    }
    
    // Vehicles Table & Sequence 
    public void createVehiclesTable() {
        settingsMapper.createVehiclesTable();
    }

    public void createVehiclesSeq() {
        settingsMapper.createVehiclesSeq();
    }

    public void initVehiclesTable() {
        settingsMapper.initVehiclesTable();
    }
    public void initVehiclesSeq() {
        settingsMapper.initVehiclesSeq();
    }
    
    public void deleteVehiclesTable() {
    	settingsMapper.deleteVehiclesTable();
    }
    public void deleteVehiclesSeq() {
    	settingsMapper.deleteVehiclesSeq();
    }


}