package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

/**
 * @author : Isuri Disanayaka
 * @date:25/06/2021
 * @since : 0.0.1
 **/
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Booking {
    @Id
    private String bookingID;
    private String driver;
    private String location;
    private String pickUpdate;
    private String returndate;
    private String permission;

    @ManyToOne
    @JoinColumn(name ="customer",referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "car",referencedColumnName = "carID")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "driver_ID",referencedColumnName = "id")
    private Driver driver_ID;
}
