package com.examly.springapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class SpringappApplication {
	//test commit 2
	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(com.examly.springapp.repos.AuthRepo authRepo,
											   com.examly.springapp.repos.CustomerRepo customerRepo,
											   com.examly.springapp.repos.AdminRepo adminRepo,
											   com.examly.springapp.repos.AddOnsRepo addOnsRepo) {
		return args -> {

			com.examly.springapp.models.Auth a1 = new com.examly.springapp.models.Auth("xyz@mail.com","1234", com.examly.springapp.enums.UserRoles.CUSTOMER);
			com.examly.springapp.models.Customer c1 = new com.examly.springapp.models.Customer("John Doe","5738280357","Atlanta, GA",a1);
			customerRepo.save(c1);

			com.examly.springapp.models.Auth a2 = new com.examly.springapp.models.Auth("admin@mail.com","1234", com.examly.springapp.enums.UserRoles.ADMIN);
			com.examly.springapp.models.Admin a3 = new com.examly.springapp.models.Admin("Admin","5738280357","Atlanta, GA",a2);
			adminRepo.save(a3);

			com.examly.springapp.models.AddOns addOns1 = new com.examly.springapp.models.AddOns("Paint","Face Paint",200L);
			com.examly.springapp.models.AddOns addOns2 = new com.examly.springapp.models.AddOns("DJ","Music for all",300L);
			com.examly.springapp.models.AddOns addOns3 = new com.examly.springapp.models.AddOns("Magic Show","Fun for kids",200L);
			addOnsRepo.saveAll(List.of(addOns1,addOns2,addOns3));

		};
	}

}
