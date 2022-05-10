package com.examly.springapp.services;

import com.examly.springapp.models.FoodItems;
import com.examly.springapp.repos.FoodItemsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodItemsService {

    @Autowired
    private FoodItemsRepo foodItemsRepo;

    public FoodItems addFoodItems(FoodItems foodItems){
        return foodItemsRepo.save(foodItems);
    }

    public List<FoodItems> getAllFoodItems(){
        return foodItemsRepo.findAll();
    }

    public FoodItems getFoodItemById(String id){
        Optional<FoodItems> optionalFoodItems = foodItemsRepo.findById(id);
        return optionalFoodItems.orElse(null);
    }

    public FoodItems updateFoodItem(FoodItems foodItems){
        return foodItemsRepo.save(foodItems);
    }

    public void deleteFoodItems(String id){
        foodItemsRepo.deleteById(id);
    }

}
