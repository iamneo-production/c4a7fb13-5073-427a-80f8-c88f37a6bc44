package com.examly.springapp.models;
public class CustomerResponse {
    private String name;
    private String phoneNo;
    private String address;
    private String email;

    private String  password;
    public CustomerResponse() {
    }

    public CustomerResponse(String name, String phoneNo, String address, String email,String password) {
      System.out.println("in reg model");
        this.name = name;
        this.phoneNo = phoneNo;
        this.address = address;
        this.email = email;
        this.password = password;
        //this.password=password;
    }

    public String getName() {
        System.out.println("name");
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
   /* public String getUserRole() {
        System.out.println("Role");
        return password;
    }

    public void setUserRole(String password) {
        
        this.password= password;
    }*/

    @Override
    public String toString() {
        return "CustomerResponse [address=" + address + ", email=" + email + ", name=" + name 
                + ", phoneNo=" + phoneNo + "]";
    }
    
    
}
