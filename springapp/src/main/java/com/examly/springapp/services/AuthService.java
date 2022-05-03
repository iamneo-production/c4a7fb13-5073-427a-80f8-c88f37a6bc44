package com.examly.springapp.services;

import com.examly.springapp.models.Auth;
import com.examly.springapp.repos.AuthRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    String emailid=null;
    @Autowired
    private AuthRepo authRepo;
    
    public String doLogin(String email,String password) throws Exception{
        this.emailid=email;
        Auth auth = authRepo.findByEmail(email);
        if(auth == null){
            System.out.println(email);
            throw new Exception("User not found");
        }
        else if(!auth.getPassword().equals(password)){
            System.out.println(password);
            throw new Exception("Password is incorrect");
        }
        else{
        System.out.println("login successfull");

        return  auth.getRoles() ;
        }

    }
    public String gettoken()
    {
        System.out.println(this.emailid);
        return emailid;
    }
    public String signout()
    {
        this.emailid=null;
        System.out.println(this.emailid);
        return emailid;
    }

}
