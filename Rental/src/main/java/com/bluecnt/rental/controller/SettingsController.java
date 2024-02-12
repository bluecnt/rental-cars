package com.bluecnt.rental.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/rental")
public class SettingsController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/customers-mgmt/settings")
    public String showSettingsPage() {
        return "/customers-mgmt/settings";
    }

    @PostMapping("/customers-mgmt/tableCreate")
    public String createTable() {
        jdbcTemplate.execute("CREATE TABLE Customers (cust_id INT PRIMARY KEY, join_date DATE, user_email VARCHAR(100), user_pw VARCHAR(100), name VARCHAR(100), birthday DATE, phone_number VARCHAR(20), license_number VARCHAR(20), credit_card_company VARCHAR(100), credit_card_number VARCHAR(20), point INT, remark VARCHAR(255))");
        return "redirect:/rental/customers-mgmt/settings";
    }

    @PostMapping("/customers-mgmt/seqCreate")
    public String createSequence() {
        jdbcTemplate.execute("CREATE SEQUENCE customers_seq START WITH 1 INCREMENT BY 1");
        return "redirect:/rental/customers-mgmt/settings";
    }

    @PostMapping("/customers-mgmt/tableInit")
    public String initializeTable() {
        jdbcTemplate.execute("TRUNCATE TABLE Customers");
        return "redirect:/rental/customers-mgmt/settings";
    }

    @PostMapping("/customers-mgmt/seqInit")
    public String initializeSequence() {
        jdbcTemplate.execute("ALTER SEQUENCE customers_seq RESTART WITH 1");
        return "redirect:/rental/customers-mgmt/settings";
    }
}
