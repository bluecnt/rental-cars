package com.bluecnt.rental.dto;

import lombok.Data;

@Data
public class ParkingLotDTO {
	private Integer pl_id;
	private String reg_date;
	private String name;
	private String address;
	private Integer latitude;
	private Integer longitude;
	private String pl_desc;
	private String remark;
}
