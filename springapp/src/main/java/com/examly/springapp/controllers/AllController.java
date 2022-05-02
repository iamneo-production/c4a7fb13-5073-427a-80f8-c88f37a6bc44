package com.examly.springapp.controllers;

import java.util.List;

import com.examly.springapp.enums.UserRoles;
import com.examly.springapp.models.Admin;
import com.examly.springapp.models.Auth;
import com.examly.springapp.models.Customer;
import com.examly.springapp.models.LoginModel;
import com.examly.springapp.models.RegisterModel;
import com.examly.springapp.repos.AuthRepo;
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
import com.examly.springapp.enums.*;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AllController {
    
    @Autowired
    private AuthService authService;
    @Autowired
    private AuthRepo authRepo;
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

    /*@GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return new ResponseEntity<>(customerService.getAllCustomers(),HttpStatus.OK);
    }*/

  /*  @GetMapping("/admins")
    public ResponseEntity<List<Admin>> getAllAdmins(){
        return new ResponseEntity<>(adminService.getAllAdmins(),HttpStatus.OK);
    }*/

    @PostMapping("/addCustomer")
    public ResponseEntity<String> addCustomer(@RequestBody RegisterModel registerModel){
        Auth auth = authRepo.findByEmail(registerModel.getEmail());
        try{
            if(auth!=null) {
                throw new Exception("User already exist");
            }
            else if(auth==null){
                Auth a = new Auth(registerModel.getEmail(),registerModel.getPassword(),UserRoles.CUSTOMER);
                Customer customer = new Customer(registerModel.getName(),registerModel.getPhoneNo(),registerModel.getAddress(),a);
                return new ResponseEntity<String>(customerService.addCustomer(customer).toString(),HttpStatus.OK);
            }
            else{
                throw new Exception("Something went wrong");
            }
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<String>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/addAdmin")
    public ResponseEntity<String> addAdmin(@RequestBody RegisterModel registerModel){
        Auth auth = authRepo.findByEmail(registerModel.getEmail());
        try{
            if(auth!=null) {
                throw new Exception("User already exist");
            }
            else if(auth==null){
                Auth a = new Auth(registerModel.getEmail(),registerModel.getPassword(),UserRoles.ADMIN);
                Admin admin = new Admin(registerModel.getName(),registerModel.getPhoneNo(),registerModel.getAddress(),a);
                return new ResponseEntity<String>(adminService.addAdmin(admin).toString(),HttpStatus.OK);
            }
            else{
                throw new Exception("Something went wrong");
            }
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

}

