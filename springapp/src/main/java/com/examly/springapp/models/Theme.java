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

    private String themeName;
    private String imageUrl;
    private String photographerDetails; //only name as of now
    private String videographerDetails; //only name as of now
    private String returnGift;
    private int themeCost;
    private String themeDescription;

    public Theme() {
    }

    public Theme(String themeName,String imageUrl, String photographerDetails, String videographerDetails, String returnGift, int themeCost, String themeDescription) {
        this.themeName = themeName;
        this.photographerDetails = photographerDetails;
        this.videographerDetails = videographerDetails;
        this.returnGift = returnGift;
        this.themeCost = themeCost;
        this.themeDescription = themeDescription;
        this.imageUrl=imageUrl;
    }

    public Theme(String id, String imageUrl ,String themeName, String photographerDetails, String videographerDetails, String returnGift, int themeCost, String themeDescription) {
        this.id = id;
        this.themeName = themeName;
        this.imageUrl=imageUrl;
        this.photographerDetails = photographerDetails;
        this.videographerDetails = videographerDetails;
        this.returnGift = returnGift;
        this.themeCost = themeCost;
        this.themeDescription = themeDescription;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getThemeName() {
        return themeName;
    }

    public void setThemeName(String themeName) {
        this.themeName = themeName;
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

    public String getReturnGift() {
        return returnGift;
    }

    public void setReturnGift(String returnGift) {
        this.returnGift = returnGift;
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
    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Theme{" +
                "id='" + id + '\'' +
                ", themeName='" + themeName + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", photographerDetails='" + photographerDetails + '\'' +
                ", videographerDetails='" + videographerDetails + '\'' +
                ", returnGift='" + returnGift + '\'' +
                ", themeCost=" + themeCost +
                ", themeDescription='" + themeDescription + '\'' +
                '}';
    }
}
