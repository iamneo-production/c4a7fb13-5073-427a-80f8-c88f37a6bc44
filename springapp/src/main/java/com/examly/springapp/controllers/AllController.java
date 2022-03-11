package com.examly.springapp.controllers;

import java.util.List;

import com.examly.springapp.enums.UserRoles;
import com.examly.springapp.models.Admin;
import com.examly.springapp.models.Auth;
import com.examly.springapp.models.Customer;
import com.examly.springapp.models.LoginModel;
import com.examly.springapp.models.RegisterModel;
import com.examly.springapp.services.AdminService;
import com.examly.springapp.services.AuthService;
import com.examly.springapp.services.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AllController {
    
    @Autowired
    private AuthService authService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<String> doLogin(@RequestBody LoginModel loginModel){
        try{
            return new ResponseEntity<>(authService.doLogin(loginModel.getEmail(),loginModel.getPassword()),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerService.getAllCustomers(),HttpStatus.OK);
    }

    @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins(){
        return new ResponseEntity<>(adminService.getAllAdmins(),HttpStatus.OK);
    }

    @PostMapping("/addCustomer")
    public ResponseEntity<Customer> addCustomer(@RequestBody RegisterModel registerModel){
        Auth a = new Auth(registerModel.getEmail(),registerModel.getPassword(),UserRoles.CUSTOMER);
        Customer customer = new Customer(registerModel.getName(),registerModel.getPhoneNo(),registerModel.getAddress(),a);
        return new ResponseEntity<>(customerService.addCustomer(customer),HttpStatus.OK);
    }

    @PostMapping("/addAdmin")
    public ResponseEntity<Admin> addAdmin(@RequestBody RegisterModel registerModel){
        Auth a = new Auth(registerModel.getEmail(),registerModel.getPassword(),UserRoles.ADMIN);
        Admin admin = new Admin(registerModel.getName(),registerModel.getPhoneNo(),registerModel.getAddress(),a);
        return new ResponseEntity<>(adminService.addAdmin(admin),HttpStatus.OK);
    }

}
