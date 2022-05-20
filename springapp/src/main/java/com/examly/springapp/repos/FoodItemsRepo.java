package com.examly.springapp.repos;

import com.examly.springapp.models.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodItemsRepo extends JpaRepository<FoodItems,String> {
}
