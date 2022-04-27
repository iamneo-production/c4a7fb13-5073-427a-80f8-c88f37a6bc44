package com.examly.springapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;


@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200/")
public class SpringappApplication {
    //test commit 2
    public static void main(String[] args) {
        SpringApplication.run(SpringappApplication.class, args);
    }

}