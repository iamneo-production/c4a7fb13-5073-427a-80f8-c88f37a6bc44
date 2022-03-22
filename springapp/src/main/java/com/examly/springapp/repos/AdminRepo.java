package com.examly.springapp.repos;

import com.examly.springapp.models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<Admin,String>{
    
}
