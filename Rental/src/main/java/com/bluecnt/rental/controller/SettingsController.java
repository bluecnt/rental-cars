package com.bluecnt.rental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bluecnt.rental.service.SettingsService;

import lombok.extern.log4j.Log4j;

@Log4j
@Controller
@RequestMapping("/rental")
public class SettingsController {
    
    @Autowired
    SettingsService settingsService;
    
    @GetMapping("/settings")
    public String showSettingsPage() {
        return "/settings";
    }
    
    @PostMapping("/settings/createCustomersTS")
    public String createCustomersTS() {
        try {
            settingsService.createCustomersTable();
            settingsService.createCustomersSeq();
            log.info("고객 테이블과 시퀀스를 생성했습니다!");
        } catch (Exception e) {
            log.error("고객 테이블과 시퀀스 생성 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
    @PostMapping("/settings/initCustomersTS")
    public String initCustomersTS() {
        try {
            settingsService.initCustomersTable();
            settingsService.initCustomersSeq();
            settingsService.createCustomersSeq();
            log.info("고객 테이블과 시퀀스를 초기화했습니다!");
        } catch (Exception e) {
            log.error("고객 테이블과 시퀀스 초기화 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
    @PostMapping("/settings/deleteCustomersTS")
    public String deleteCustomersTS() {
        try {
            settingsService.deleteCustomersTable();
            settingsService.deleteCustomersSeq();
            log.info("고객 테이블과 시퀀스를 삭제했습니다.");
        } catch (Exception e) {
            log.error("고객 테이블과 시퀀스 삭제 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
    @PostMapping("/settings/createParkingLotsTS")
    public String createParkingLotsTS() {
        try {
            settingsService.createParkingLotsTable();
            settingsService.createParkingLotsSeq();
            log.info("주차장 테이블과 시퀀스를 생성했습니다!");
        } catch (Exception e) {
            log.error("주차장 테이블과 시퀀스 생성 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
    @PostMapping("/settings/initCustomersTS")
    public String initParkingLotsTS() {
        try {
            settingsService.initParkingLotsTable();
            settingsService.initParkingLotsSeq();
            settingsService.createParkingLotsSeq();
            log.info("주차장 테이블과 시퀀스를 초기화했습니다!");
        } catch (Exception e) {
            log.error("주차장 테이블과 시퀀스 초기화 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
    @PostMapping("/settings/deleteParkingLotsTS")
    public String deleteParkingLotsTS() {
        try {
            settingsService.deleteParkingLotsTable();
            settingsService.deleteParkingLotsSeq();
            log.info("주차장 테이블과 시퀀스를 삭제했습니다.");
        } catch (Exception e) {
            log.error("주차장 테이블과 시퀀스 삭제 중 오류가 발생했습니다: " + e.getMessage());
        }
        return "redirect:/rental/settings";
    }
    
}