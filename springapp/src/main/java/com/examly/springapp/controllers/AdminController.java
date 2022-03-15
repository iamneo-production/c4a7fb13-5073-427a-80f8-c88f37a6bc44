package com.examly.springapp.controllers;


import com.examly.springapp.models.Theme;
import com.examly.springapp.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;
    @PostMapping("/addTheme")
    public void addTheme(@RequestBody Theme theme){
        System.out.println(theme.toString());
        adminService.addTheme(theme);
    }

    @DeleteMapping("/deleteTheme")
    public void deleteTheme(@RequestParam String id){
        adminService.deleteTheme(id);
    }
}
