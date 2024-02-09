package com.bluecnt.rental.dto;

import lombok.Data;

@Data
public class CustomerDTO {
	
	private Integer cust_id;
	private String join_date;
	private String user_email;  // user_email 필드 추가
	private String user_pw;  // user_pw 필드 추가
	private String name;
	private String birthday; 
	private String phone_number;
	private String license_number;
	private String credit_card_company;
	private String credit_card_number;
	private Integer point; 
	private String remark;

}
