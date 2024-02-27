package com.bluecnt.rental.dto;

import lombok.Data;

@Data
public class ReservationDTO {
	
	private Integer cust_id;
	private Integer reg_id;
	private String start_time;
	private String end_time;
}
