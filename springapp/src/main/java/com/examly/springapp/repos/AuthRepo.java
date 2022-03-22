package com.examly.springapp.repos;

import com.examly.springapp.models.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthRepo extends JpaRepository<Auth,String>{

    Auth findByEmail(String email);
    
}
