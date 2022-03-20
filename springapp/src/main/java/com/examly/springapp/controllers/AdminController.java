package com.examly.springapp.controllers;


import com.examly.springapp.models.Theme;
import com.examly.springapp.services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping("/getTheme/{id}")
    public Theme getTheme(@PathVariable String id){
        return adminService.getTheme(id);
    }
    @PostMapping("/addTheme")
    public void addTheme(@RequestBody Theme theme){
        System.out.println(theme.toString());
        adminService.addTheme(theme);
    }

    @PutMapping("/updateTheme/{id}")
    public void updateTheme(@PathVariable String id,@RequestBody Theme theme){
        theme.setId(id);
        System.out.println("____________------------"+ "Inside put Mappint"+"------------____________");
        adminService.updateTheme(theme);
    }
    @DeleteMapping("/deleteTheme/{id}")
    public void deleteTheme(@PathVariable String id){
        adminService.deleteTheme(id);
    }
}
