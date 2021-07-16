package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : Isuri Disanayaka
 * @date:16/06/2021
 * @since : 0.0.1
 **/
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Customer {

    @Id
    private String id;
    private String name;
    private String contact;
    private String email;
    private String address;
    private String drivinglicenceNo;
    private String drivingphoto;
    private String nicNo;
    private String nicphotos;
    private String userName;
    private String password;
}
