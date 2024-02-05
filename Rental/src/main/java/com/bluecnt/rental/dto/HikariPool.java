package com.bluecnt.rental.dto;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class HikariPool {

	public static void main(String[] args) {
		
	HikariConfig config = new HikariConfig();
	config.setJdbcUrl("jdbc:oracle:thin:@localhost:1521:XE");
	config.setUsername("hr");
	config.setPassword("1234");
	config.addDataSourceProperty("driverClassName", "oracle.jdbc.driver.OracleDriver");
	config.addDataSourceProperty("cachePrepStmts", "true");
	config.addDataSourceProperty("prepStmtCacheSize", "250");
	config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
	
	HikariDataSource ds = new HikariDataSource(config);
	
	}
	
}
