package com.examly.springapp.services;

import java.util.List;

import com.examly.springapp.models.Admin;
import com.examly.springapp.models.Theme;
import com.examly.springapp.repos.AdminRepo;

import com.examly.springapp.repos.ThemeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    
    @Autowired
    private AdminRepo adminRepo;
    @Autowired
    private ThemeRepo themeRepo;

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

}
