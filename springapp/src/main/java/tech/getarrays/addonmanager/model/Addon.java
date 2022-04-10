package tech.getarrays.addonmanager.model;
import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Addon implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String price;
    private String description;
    private String profile;
    private String imageUrl;
    @Column(nullable = false, updatable = false)
    private String addonCode;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getprice() {
        return price;
    }

    public void setprice(String price) {
        this.price = price;
    }

    public String getdescription() {
        return description;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public String getprofile() {
        return profile;
    }

    public void setprofile(String profile) {
        this.profile = profile;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getaddonCode() {
        return addonCode;
    }

    public void setaddonCode(String addonCode) {
        this.addonCode = addonCode;
    }

    @Override
    public String toString() {
        return "Addon{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price='" + price + '\'' +
                ", description='" + description + '\'' +
                ", profile='" + profile + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", addonCode='" + addonCode + '\'' +
                '}';
    }
}

