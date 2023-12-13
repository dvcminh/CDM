package com.minhvu.productservice.service;

import com.cloudinary.Cloudinary;
import com.minhvu.productservice.dto.CreateCarRequest;
import com.minhvu.productservice.dto.UpdateCarRequest;
import com.minhvu.productservice.model.Car;
import com.minhvu.productservice.repository.CarRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class CarServiceImpl implements CarService {
    private final CarRepository carRepository;
    private final Cloudinary cloudinary;

    public List<Car> getAllProducts() {
        return carRepository.findAll();
    }

    @Override
    public Car getProductById(String id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car createProduct(CreateCarRequest request) throws IOException {
//        String imageUrl = uploadProductImage(imageFile);

        return carRepository.save(Car.builder()
                        .model(request.getModel())
                        .disPrice(request.getDisPrice())
                        .orgPrice(request.getOrgPrice())
                        .gift(request.getGift())
                        .count(request.getCount())
                        .odo(request.getOdo())
                        .tech(request.getTech())
                        .range(request.getRange())
                        .trim(request.getTrim())
                        .topSpeed(request.getTopSpeed())
                        .timeToReach(request.getTimeToReach())
                        .imgSrc(request.getImgSrc())
                        .perMonthPrice(request.getPerMonthPrice())
                        .keyFeatures(request.getKeyFeatures())
                        .status(request.getStatus())
                        .build()
        );
    }

    @Override
    public Car updateProduct(UpdateCarRequest updateCarRequest) {
        Car product = carRepository.findById(updateCarRequest.getId()).orElse(null);
        if (product != null) {
            product.setModel(updateCarRequest.getModel());

            return carRepository.save(product);
        }
        throw new RuntimeException("Product not found");
    }
    @Override
    public List<Car> findProductByModelIgnoreCase(String model) {
        return carRepository.findAllByModelIgnoreCase(model);
    }

    @Override
    public void deleteProduct(String id) {
        carRepository.deleteById(id);
    }

    public String uploadProductImage(MultipartFile imageFile) throws IOException {
        Map<String, String> params = new HashMap<>();
        params.put("folder", "product_images");

        Map<?, ?> uploadResult = cloudinary.uploader().upload(imageFile.getBytes(), params);

        return uploadResult.get("secure_url").toString();
    }
}
