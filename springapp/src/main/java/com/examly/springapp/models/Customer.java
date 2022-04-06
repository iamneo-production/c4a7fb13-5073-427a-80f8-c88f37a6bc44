package com.examly.springapp.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
//import javax.persistence.uniqueConstraints;
import javax.persistence.UniqueConstraint;
import javax.persistence.Table ;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(uniqueConstraints={ @UniqueConstraint(columnNames = "auth_id") })
public class Customer {
    
    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    private String name;
    private String phoneNo;
    private String address;
    

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Auth auth;    

    public Customer() {
    }

    public Customer(String name, String phoneNo, String address, Auth auth) {
        System.out.println("In customer");
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.auth = auth;
    }

    public Customer(String id, String name, String phoneNo, String address, Auth auth) {
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
    public Auth getAuth()
    {
        return this.auth;
    }

    @Override
    public String toString() {
        return "Customer [address=" + address + ", id=" + id + ", name=" + name + ", phoneNo=" + phoneNo + "]";
    }

}
