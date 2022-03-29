package com.examly.springapp.models;

import com.examly.springapp.enums.FoodType;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class FoodItems {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private String name;
    private FoodType category;
    private int cost;
//    Image will be added later


    public FoodItems() {
    }

    public FoodItems(String name, FoodType category, int cost) {
        this.name = name;
        this.category = category;
        this.cost = cost;
    }

    public FoodItems(String id, String name, FoodType category, int cost) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.cost = cost;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public FoodType getCategory() {
        return category;
    }

    public void setCategory(FoodType category) {
        this.category = category;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "FoodItems{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", category=" + category +
                ", cost=" + cost +
                '}';
    }
}
