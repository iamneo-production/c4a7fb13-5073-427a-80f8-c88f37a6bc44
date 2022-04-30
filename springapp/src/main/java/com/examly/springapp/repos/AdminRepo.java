package com.examly.springapp.repos;

import com.examly.springapp.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin,Auth>{
    Admin findByAuth(Auth id);
    
}
