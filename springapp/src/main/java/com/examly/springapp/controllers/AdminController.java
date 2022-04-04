package com.examly.springapp.controllers;

import com.examly.springapp.models.FoodItems;
import com.examly.springapp.services.FoodItemsService;
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
    private FoodItemsService foodItemsService;

    @PostMapping("/addFoodItem")
    public ResponseEntity<FoodItems> addFoodItem(@RequestBody FoodItems foodItems){
        return new ResponseEntity<>(foodItemsService.addFoodItems(foodItems), HttpStatus.CREATED);
    }

    @GetMapping("/getAllFoodItem")
    public ResponseEntity<List<FoodItems>> getAllFoodItems(){
        return new ResponseEntity<>(foodItemsService.getAllFoodItems(),HttpStatus.OK);
    }

    @GetMapping("/getFoodItem/{id}")
    public ResponseEntity<FoodItems> getFoodItemById(@PathVariable String id){
        FoodItems foodItems = foodItemsService.getFoodItemById(id);
        if(foodItems == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(foodItems,HttpStatus.OK);
    }

    @PutMapping("/updateFoodItem")
    public ResponseEntity<FoodItems> updateFoodItems(@RequestBody FoodItems foodItems){
        return new ResponseEntity<>(foodItemsService.updateFoodItem(foodItems),HttpStatus.CREATED);
    }

    @DeleteMapping("/deleteFoodItem/{id}")
    public ResponseEntity<List<FoodItems>> deleteFoodItems(@PathVariable String id){
        foodItemsService.deleteFoodItems(id);
        return new ResponseEntity<>(foodItemsService.getAllFoodItems(),HttpStatus.OK);
    }
}
