package com.examly.springapp.repos;

import com.examly.springapp.models.Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface AuthRepo extends JpaRepository<Auth,String>{

    Auth findByEmail(String email);
    void deleteByEmail(String email);
    List<Auth> findByRolesContaining(String s);
    
    
}
