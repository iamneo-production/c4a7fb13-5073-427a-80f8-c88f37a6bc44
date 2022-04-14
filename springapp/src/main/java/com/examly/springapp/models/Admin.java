package com.examly.springapp.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Admin {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private String name;
    private String phoneNo;
    private String address;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Auth auth;    

    public Admin() {
    }

    public Admin(String name, String phoneNo, String address, Auth auth) {
        System.out.println("In Admin");
        //console.log("In Admin");
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.auth = auth;
    }

    public Admin(String id, String name, String phoneNo, String address, Auth auth) {
        this.id = id;
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.auth = auth;
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

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Auth getAuth() {
        return auth;
    }

    public void setAuth(Auth auth) {
        this.auth = auth;
    }
}

