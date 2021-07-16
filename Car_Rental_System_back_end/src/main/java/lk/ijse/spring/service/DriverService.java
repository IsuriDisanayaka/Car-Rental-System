package lk.ijse.spring.service;


import lk.ijse.spring.dto.DriverDTO;

import java.util.ArrayList;

/**
 * @author : Isuri Disanayaka
 * @date:22/06/2021
 * @since : 0.0.1
 **/
public interface DriverService {
    void addDriver(DriverDTO dto);
    void deleteDriver(String id);
    DriverDTO searchDriver(String id);
    ArrayList<DriverDTO> getAllDrivers();
    void updateDriver(DriverDTO dto);
}
