package com.examly.springapp.services;

import java.util.List;

import com.examly.springapp.models.*;
import com.examly.springapp.repos.AdminRepo;
import com.examly.springapp.repos.AuthRepo;
import com.examly.springapp.repos.ThemeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    
    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private ThemeRepo themeRepo;
    @Autowired
    private AuthRepo authRepo ;

    public Admin addAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    public List<Admin> getAllAdmins() {
        return adminRepo.findAll();
    }

    public String addTheme(Theme theme){
        System.out.println(theme.toString());
        themeRepo.save(theme);
        return "Entity Saved";
    }

    public String deleteTheme(String id){
        themeRepo.deleteById(id);
        return "Delete Successful";
    }

    public Theme getTheme(String id){
        System.out.println("____________------------"+ themeRepo.getOne(id).toString()+"------------____________");
        return themeRepo.findById(id).get();
    }

    public String updateTheme(Theme theme){
        themeRepo.save(theme);
        return "Updated";
    }

    public CustomerResponse getAdmin(String email) {
        Auth a=authRepo.findByEmail(email);
        System.out.println("get by email");
         CustomerResponse p=null;
         if(a!=null)
         {
            
             
              Admin a1=adminRepo.findByAuth(a);
                  p= new CustomerResponse(a1.getName(),a1.getPhoneNo(),a1.getAddress(),a.getEmail(),a.getPassword());
 
           
         }
         System.out.println(p);
         return p;
 
     }
     public  CustomerResponse updateAdmin( CustomerResponse cs , String Id)
    {
        System.out.println("update");
        Auth a1=authRepo.findByEmail(Id);
       Admin a =adminRepo.findByAuth(a1);
        a1.setEmail(cs.getEmail());
        a.setName(cs.getName());
        a.setPhoneNo(cs.getPhoneNo());
        a.setAddress(cs.getAddress());
        a1.setPassword(cs.getPassword());
        authRepo.save(a1);
        adminRepo.save(a);
        CustomerResponse obj = new CustomerResponse(a.getName(),a.getPhoneNo(),a.getAddress(),a1.getEmail(),a1.getPassword());
        return obj ;
    }


}