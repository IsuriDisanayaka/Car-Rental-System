package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.exception.ValidateException;
import lk.ijse.spring.repo.CarRepo;
import lk.ijse.spring.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/
@Service
@Transactional
public class CarServiceImpl implements CarService {
  @Autowired
  private CarRepo  carRepo;
  @Autowired
  private ModelMapper mapper;

    @Override
    public void addCar(CarDTO dto) {
     if(carRepo.existsById(dto.getCarID())){
         throw new ValidateException("Car Already Exist");
     }
     carRepo.save(mapper.map(dto, Car.class));
    }

    @Override
    public void deleteCar(String id) {
        if(!carRepo.existsById(id)){
            throw new ValidateException("No Car for Delete..!");
        }
        carRepo.deleteById(id);
    }

    @Override
    public CarDTO searchCar(String id) {
        Optional<Car> car = carRepo.findById(id);
        if (car.isPresent()) {
            return mapper.map(car.get(), CarDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<CarDTO> getAllCars() {
        List<Car> all = carRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (carRepo.existsById(dto.getCarID())) {
            carRepo.save(mapper.map(dto,Car.class));

        }
    }

    @Override
    public List<CarDTO> searchCarbyType(String id) {
        List<Car> carsByType = carRepo.findCarsByType(id);
        return mapper.map(carsByType, new TypeToken<List<CarDTO>>(){}.getType());
    }
    }

