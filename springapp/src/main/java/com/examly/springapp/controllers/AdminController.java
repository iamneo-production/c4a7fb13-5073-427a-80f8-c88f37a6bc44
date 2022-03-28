package com.examly.springapp.controllers;

import com.examly.springapp.models.AddOns;
import com.examly.springapp.services.AddOnsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AddOnsService addOnsService;

    @PostMapping("/addAddon")
    public ResponseEntity<AddOns> saveAddOn(@RequestBody AddOns addOns){
        return new ResponseEntity<>(addOnsService.saveAddOns(addOns), HttpStatus.CREATED);
    }

    @GetMapping("/getAddon")
    public ResponseEntity<List<AddOns>> getAllAddOns(){
        return new ResponseEntity<>(addOnsService.getAllAddOns(), HttpStatus.OK);
    }

    @GetMapping("/addOn/{id}")
    public ResponseEntity<AddOns> AddOnById(@PathVariable String id) throws Exception {
        try {
            return new ResponseEntity<>(addOnsService.AddOnsById(id),HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/editAddon")
    public ResponseEntity<AddOns> updateAddOns(@RequestBody AddOns addOns){
        return new ResponseEntity<>(addOnsService.updateAddOns(addOns),HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteAddon/{id}")
    public ResponseEntity<?> deleteAddOn(@PathVariable String id){
        addOnsService.deleteAddOns(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
