package com.examly.springapp.models;

import javax.persistence.Id;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import com.examly.springapp.enums.UserRoles;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Auth {

    @Id
    @GeneratedValue(generator="system-uuid")
    @GenericGenerator(name="system-uuid", strategy = "uuid")
    private String id;
    @Column(unique=true,nullable=true)
    private String email;
    private String password;
    private UserRoles roles;
    
    public Auth() {
    }

    public Auth(String email, String password, UserRoles roles) {
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public Auth(String id, String email, String password, UserRoles roles) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public UserRoles getRoles() {
        return roles;
    }

    public void setRoles(UserRoles roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "Auth [email=" + email + ", id=" + id + ", password=" + password + ", roles=" + roles + "]";
    }

}
