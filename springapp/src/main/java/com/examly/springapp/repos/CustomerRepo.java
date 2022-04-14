package com.examly.springapp.repos;

import com.examly.springapp.models.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Auth>{
    List<Customer> findAll();
    Customer findByAuth(Auth id);
    void deleteByAuth(Auth Id);
 
    
    
}
