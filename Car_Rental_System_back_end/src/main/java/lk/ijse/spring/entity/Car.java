package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Car {
    @Id
    private String carID;
    private String brand;
    private String type;
    private String photo;
    private String color;
    private int passengers;
    private  String transmission;
    private String fuel;
    private double dailyRate;
    private int freeKmForDay;
    private double monthlyRate;
    private int freeKmForMonth;
    private double priceForExtraKM;
    private String regNumber;
    private int carQuntity;
}
