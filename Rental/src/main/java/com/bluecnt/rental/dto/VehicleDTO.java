package com.bluecnt.rental.dto;

import lombok.Data;

@Data
public class VehicleDTO {
	private Integer vehicle_id;
	private String reg_date;
	private String name;
	private String v_img;
	private String plate_number;
	private String options;
	private Integer price_per_hour;
	private Integer price_per_km;
	private String v_desc;
	private String remark;
}
