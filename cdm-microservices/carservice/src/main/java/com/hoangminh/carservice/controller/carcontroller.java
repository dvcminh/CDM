package com.hoangminh.carservice.controller;

import com.hoangminh.carservice.model.Car;
import com.hoangminh.carservice.repository.CarRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/car")
public class carcontroller {
    private final CarRepository carrepository;

    public carcontroller(CarRepository carrepository) {
        this.carrepository = carrepository;
    }


    @GetMapping("/getAll")
    public ResponseEntity<List<Car>> getAllUser() {
        return ResponseEntity.ok(this.carrepository.findAll());
    }

    @GetMapping("/getCar/{id}")
    public ResponseEntity<Optional<Car>> getCarById(@PathVariable String id){
        Optional<Car> car = this.carrepository.findById(id);

        if(car.isPresent())
            return ResponseEntity.ok(this.carrepository.findById(id));
        return null;
    }
    @PostMapping("/create")
    public ResponseEntity<Car> createNewUser(@RequestBody Car userreq) {

        Car car = new Car();
        car.setModel(userreq.getModel());
        car.setDisPrice(userreq.getDisPrice());
        car.setOrgPrice(userreq.getOrgPrice());
        car.setGift(userreq.getGift());
        car.setCount(userreq.getCount());
        car.setOdo(userreq.getOdo());
        car.setTech(userreq.getTech());
        car.setRange(userreq.getRange());
        car.setTrim(userreq.getTrim());
        car.setIsAvailable(userreq.getIsAvailable());
        car.setTopSpeed(userreq.getTopSpeed());
        car.setTimeToReach(userreq.getTimeToReach());
        return ResponseEntity.status(201).body(this.carrepository.save(car));
    }



}
