package com.examly.springapp.controller;
import com.examly.springapp.services.*;
import com.examly.springapp.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class customerController {

    @Autowired
    private CustomerService customerservice;
    @Autowired
    private AdminService adminservice;

    @GetMapping("admin/getCustomer")
    public ResponseEntity<List<Auth>> getAllCustomers() {
        List<Auth> list = customerservice.getCustomers();
        System.out.println("customers list");
        if (list.size() <= 0) {
            System.out.println("No customers" );
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
        System.out.println(list);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }


    @GetMapping("admin/getCustomer/{id}")
    public ResponseEntity<CustomerResponse> getCustomer(@PathVariable("id") String  id) {
        CustomerResponse user = customerservice.getCustomer(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }

    @GetMapping("admin/deleteCustomer/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable("id") String id) {

       System.out.println("delete controller");
       CustomerResponse user= customerservice.getCustomer(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        System.out.println(user);
        return new ResponseEntity<>(customerservice.deleteCustomer(id),HttpStatus.OK);
    }

    @PostMapping("customer/editCustomer/{id}")
    public ResponseEntity<CustomerResponse> editCustomer( @PathVariable("id") String id  ,@RequestBody  CustomerResponse userModel) {
        System.out.println("edit");
        CustomerResponse user = customerservice.getCustomer(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        CustomerResponse user1 = customerservice.updateCustomer(userModel, id);
        System.out.println(user1);
        return ResponseEntity.status(HttpStatus.OK).body(user1);

    }
    @GetMapping("admin/getAdmin/{id}")
    public ResponseEntity<CustomerResponse> getAdmin(@PathVariable("id") String  id) {
        CustomerResponse user =adminservice.getAdmin(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    @PostMapping("admin/editAdmin/{id}")
    public ResponseEntity<CustomerResponse> editAdmin( @PathVariable("id") String id  ,@RequestBody  CustomerResponse userModel) {
        System.out.println("edit");
        CustomerResponse user = adminservice.getAdmin(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        CustomerResponse user1 = adminservice.updateAdmin(userModel, id);
        System.out.println(user1);
        return ResponseEntity.status(HttpStatus.OK).body(user1);

    }
}

