package com.ezen.bluecnt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ezen.bluecnt.service.BluecntService;

@RequestMapping("/bluecnt")
@Controller
public class BluecntController {
	
	@Autowired
	BluecntService boardService;
	

}
