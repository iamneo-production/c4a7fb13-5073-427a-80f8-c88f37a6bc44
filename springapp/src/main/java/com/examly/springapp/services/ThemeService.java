package com.examly.springapp.services;

import java.util.List;

import com.examly.springapp.models.Admin;
import com.examly.springapp.models.Theme;
import com.examly.springapp.repos.AdminRepo;

import com.examly.springapp.repos.ThemeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class ThemeService {

    @Autowired
    private ThemeRepo themeRepo;
    public Theme addTheme(Theme theme){
        System.out.println(theme.toString());
       return  themeRepo.save(theme);
        
    }

    public Map<String , Boolean>  deleteTheme(String id){
        themeRepo.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return (response);
    }

    public Theme getTheme(String id){
        System.out.println("____________------------"+ themeRepo.getOne(id).toString()+"------------____________");
        return themeRepo.findById(id).get();
    }

    public Theme updateTheme(Theme theme , String id ){
        themeRepo.deleteById(id);
        return themeRepo.save(theme);
        
    }
    public List<Theme> getThemes() {
        System.out.println("theme service");
         return themeRepo.findAll();
    }
}
    
