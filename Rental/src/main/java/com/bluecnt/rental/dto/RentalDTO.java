package com.bluecnt.rental.dto;

import lombok.Data;

@Data
public class RentalDTO {
	
	private Integer rent_id;
	private String reserve_date;
	private Integer reg_id;
	private String start_time;
	private String end_time;
	private Integer driving_status;
	private String remark;
	
}
