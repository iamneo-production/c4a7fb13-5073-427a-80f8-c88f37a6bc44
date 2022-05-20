package com.examly.springapp.models;

import com.examly.springapp.enums.FoodType;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Arrays;

@Entity
public class FoodItems {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private String name;
    private FoodType category;
    private int cost;
    //private Boolean status;
//    Image will be added later
    @Lob
    private byte[] image;


    public FoodItems() {
    }

    public FoodItems(String name, FoodType category, int cost, byte[] image) {
        this.name = name;
        this.category = category;
        this.cost = cost;
        this.image = image;
    }

    public FoodItems(String id, String name, FoodType category, int cost, byte[] image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.cost = cost;
        this.image = image;
    }
    /*public Boolean getStatus()
    {
       return  this.status;
    }
    public void setStatus(Boolean a)
    {
        this.status=a;
    }*/

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

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "FoodItems{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", category=" + category +
                ", cost=" + cost +
                ", image=" + Arrays.toString(image) +
                '}';
    }
}