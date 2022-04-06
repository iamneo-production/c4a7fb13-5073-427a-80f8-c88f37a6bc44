package com.examly.springapp.services;

import java.util.*;
import com.examly.springapp.models.*;
import com.examly.springapp.repos.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    
    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private AdminRepo  adminRepo;
    @Autowired
    private AuthRepo authRepo;
    

    public  String  addCustomer(Customer customer) {
       
       customerRepo.save(customer);
       return "Successsfull";
    }
    public List<Auth> getCustomers() {
        System.out.println("customers service");
         return authRepo.findByRolesContaining("CUSTOMER");
    }


 public CustomerResponse getCustomer(String email) {
       Auth a=authRepo.findByEmail(email);
       System.out.println("get by email");
        CustomerResponse p=null;
        if(a!=null)
        {
           
            
              Customer c=customerRepo.findByAuth(a);
                 p= new CustomerResponse(c.getName(),c.getPhoneNo(),c.getAddress(),a.getEmail(),a.getPassword());

          
        }
        System.out.println(p);
        return p;

    }
    
   public Map<String, Boolean>  deleteCustomer(String  Id)
    {       
        System.out.println("delete service");
            Auth a=authRepo.findByEmail(Id);
            Customer c=customerRepo.findByAuth(a);
            customerRepo.delete(c);
            authRepo.delete(a);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return (response);
    }
    
    public  CustomerResponse updateCustomer( CustomerResponse cs , String Id)
    {
        System.out.println("update");
    Auth a=authRepo.findByEmail(Id);
       Customer c =customerRepo.findByAuth(a);
        a.setEmail(cs.getEmail());
        c.setName(cs.getName());
        c.setPhoneNo(cs.getPhoneNo());
        c.setAddress(cs.getAddress());
        a.setPassword(cs.getPassword());
        authRepo.save(a);
        customerRepo.save(c);
        CustomerResponse obj = new CustomerResponse(c.getName(),c.getPhoneNo(),c.getAddress(),a.getEmail(),a.getPassword());
        return obj ;
    }
}
