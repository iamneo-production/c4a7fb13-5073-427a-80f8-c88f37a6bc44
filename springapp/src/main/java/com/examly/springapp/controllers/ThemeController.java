package com.examly.springapp.controllers;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import com.examly.springapp.models.Theme;
import com.examly.springapp.services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class ThemeController {
    @Autowired
    private   ThemeService   themeService;



    @GetMapping("admin/getTheme")
    public ResponseEntity<List<Theme>> getAllThemes() {
        List<Theme> list = themeService.getThemes();
        System.out.println("Theme list");
        if (list.size() <= 0) {
            System.out.println("No themes" );
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        }
        System.out.println(list);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }

    @GetMapping("admin/getTheme/{id}")
    public ResponseEntity<Theme> getTheme(@PathVariable("id") String id){
        Theme t= themeService.getTheme(id);
        if (t == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(t);
    }
    @PostMapping("admin/addTheme")
    public ResponseEntity<Theme> addTheme(@RequestBody Theme theme){
        System.out.println(theme.toString());
        return ResponseEntity.status(HttpStatus.OK).body(themeService.addTheme(theme));
    }

    @PostMapping("admin/updateTheme/{id}")
    public ResponseEntity<Theme> updateTheme(@PathVariable("id") String id, @RequestBody Theme theme){
        //theme.setId(id);
        System.out.println("____________------------"+ "Inside put Mapping"+"------------____________");
        Theme t=themeService.updateTheme(theme, id);
        return ResponseEntity.status(HttpStatus.OK).body(t);
    }
    @GetMapping("admin/deleteTheme/{id}")
    public ResponseEntity<Map<String , Boolean>>  deleteTheme(@PathVariable("id") String id){
        System.out.println("delete controller");
       Theme t= themeService.getTheme(id);
        if (t == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        
        System.out.println(t);
        return new ResponseEntity<>(themeService.deleteTheme(id),HttpStatus.OK);
    }
}
