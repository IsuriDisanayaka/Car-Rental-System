package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarDTO;


import java.util.ArrayList;
import java.util.List;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/
public interface CarService {
    void addCar(CarDTO dto);
    void deleteCar(String id);
    CarDTO searchCar(String id);
    ArrayList<CarDTO> getAllCars();
    void updateCar(CarDTO dto);
    List<CarDTO> searchCarbyType(String id);
}
