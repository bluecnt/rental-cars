package com.bluecnt.rental.dto;

import java.util.Date;

import lombok.Data;

@Data
public class ParkingLotsDTO {
	private Integer pl_id;
	private Date reg_date;
	private String name;
	private String address;
	private Integer latitude;
	private Integer longitude;
	private String desc;
	private String remark;
}
