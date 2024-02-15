package com.bluecnt.rental.mapper;

public interface SettingsMapper {
	
	// Customers
	public void createCustomersTable();
	public void createCustomersSeq();
    public void initCustomersTable(); 
    public void initCustomersSeq(); 
    public void deleteCustomersTable();
    public void deleteCustomersSeq();
    
    // Parking-Lots
    public void createParkingLotsTable();
    public void createParkingLotsSeq();
    public void initParkingLotsTable(); 
    public void initParkingLotsSeq(); 
    public void deleteParkingLotsTable();
    public void deleteParkingLotsSeq();
    
}
