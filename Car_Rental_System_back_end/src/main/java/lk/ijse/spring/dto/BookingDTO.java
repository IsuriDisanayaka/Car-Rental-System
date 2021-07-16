package lk.ijse.spring.dto;

import lk.ijse.spring.entity.Car;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Driver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



/**
 * @author : Isuri Disanayaka
 * @date:25/06/2021
 * @since : 0.0.1
 **/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BookingDTO {
    private String bookingID;
    private String driver;
    private String location;
    private String pickUpdate;
    private String returndate;
    private String permission;
    private Customer customer;
    private Car car;
    private Driver driver_ID;

}
