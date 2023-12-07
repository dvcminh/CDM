package com.hoangminh.carservice.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "car")
public class Car {
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getOrgPrice() {
        return orgPrice;
    }

    public void setOrgPrice(String orgPrice) {
        this.orgPrice = orgPrice;
    }

    public String getDisPrice() {
        return disPrice;
    }

    public void setDisPrice(String disPrice) {
        this.disPrice = disPrice;
    }

    public String getTrim() {
        return trim;
    }

    public void setTrim(String trim) {
        this.trim = trim;
    }

    public String getOdo() {
        return odo;
    }

    public void setOdo(String odo) {
        this.odo = odo;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public String getTopSpeed() {
        return topSpeed;
    }

    public void setTopSpeed(String topSpeed) {
        this.topSpeed = topSpeed;
    }

    public String getTimeToReach() {
        return timeToReach;
    }

    public void setTimeToReach(String timeToReach) {
        this.timeToReach = timeToReach;
    }

    public String getIsAvailable() {
        return isAvailable;
    }

    public void setIsAvailable(String isAvailable) {
        this.isAvailable = isAvailable;
    }

    public String getTech() {
        return tech;
    }

    public void setTech(String tech) {
        this.tech = tech;
    }

    public String getGift() {
        return gift;
    }

    public void setGift(String gift) {
        this.gift = gift;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Id
    private String id;
    private String model;
    private String orgPrice;
    private String disPrice;
    private String trim;
    private String odo;
    private String range;
    private String topSpeed;
    private String timeToReach;

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    private String imgSrc;
    public Car(){}
    public Car(String id, String model, String orgPrice, String disPrice, String trim, String odo, String range, String topSpeed, String timeToReach, String isAvailable, String tech, String gift, int count, String imgSrc) {
        this.id = id;
        this.model = model;
        this.orgPrice = orgPrice;
        this.disPrice = disPrice;
        this.trim = trim;
        this.odo = odo;
        this.range = range;
        this.topSpeed = topSpeed;
        this.timeToReach = timeToReach;
        this.isAvailable = isAvailable;
        this.tech = tech;
        this.gift = gift;
        this.count = count;
        this.imgSrc = imgSrc;
    }

    private String isAvailable;
    private String tech;
    private String gift;
    private int count;
}
