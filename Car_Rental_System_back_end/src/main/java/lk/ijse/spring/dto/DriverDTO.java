package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Isuri Disanayaka
 * @date:22/06/2021
 * @since : 0.0.1
 **/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DriverDTO {
    private String id;
    private String name;
    private String address;
    private String contact;
    private String nicNo;
    private String drivinglicenceNo;
    private String userName;
    private String password;
}
