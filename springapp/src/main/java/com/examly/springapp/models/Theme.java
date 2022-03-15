package com.examly.springapp.models;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Theme {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;

    private String name;
    private String photographerDetails; //only name as of now
    private String videographerDetails; //only name as of now
    private String themeReturnGift;
    private int themeCost;
    private String themeDescription;

    public Theme(
            String id, String name, String photographerDetails, String videographerDetails, String themeReturnGift, int themeCost, String themeDescription) {
        this.id = id;
        this.name = name;
        this.photographerDetails = photographerDetails;
        this.videographerDetails = videographerDetails;
        this.themeReturnGift = themeReturnGift;
        this.themeCost = themeCost;
        this.themeDescription = themeDescription;
    }

    public Theme(String name, String photographerDetails, String videographerDetails, String themeReturnGift, int themeCost, String themeDescription) {
        this.name = name;
        this.photographerDetails = photographerDetails;
        this.videographerDetails = videographerDetails;
        this.themeReturnGift = themeReturnGift;
        this.themeCost = themeCost;
        this.themeDescription = themeDescription;
    }

    public Theme() {
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

    public String getPhotographerDetails() {
        return photographerDetails;
    }

    public void setPhotographerDetails(String photographerDetails) {
        this.photographerDetails = photographerDetails;
    }

    public String getVideographerDetails() {
        return videographerDetails;
    }

    public void setVideographerDetails(String videographerDetails) {
        this.videographerDetails = videographerDetails;
    }

    public String getThemeReturnGift() {
        return themeReturnGift;
    }

    public void setThemeReturnGift(String themeReturnGift) {
        this.themeReturnGift = themeReturnGift;
    }

    public int getThemeCost() {
        return themeCost;
    }

    public void setThemeCost(int themeCost) {
        this.themeCost = themeCost;
    }

    public String getThemeDescription() {
        return themeDescription;
    }

    public void setThemeDescription(String themeDescription) {
        this.themeDescription = themeDescription;
    }

    @Override
    public String toString() {
        return "Theme{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", photographerDetails='" + photographerDetails + '\'' +
                ", videograpgerDetails='" + videographerDetails + '\'' +
                ", themeReturnGift='" + themeReturnGift + '\'' +
                ", themeCost=" + themeCost +
                ", thremeDescription='" + themeDescription + '\'' +
                '}';
    }
}
