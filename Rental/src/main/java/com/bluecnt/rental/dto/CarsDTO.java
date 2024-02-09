package com.bluecnt.rental.dto;

import java.util.Date;

import lombok.Data;

@Data
public class CarsDTO {
	private String car_id;
	private Date reg_date;
	private Integer pl_id;
	private String name;
	private String img;
	private String plate_number;
	private String options;
	private Integer price_per_hour;
	private Integer price_per_km;
	private String desc;
	private String remark;
}
