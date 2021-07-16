package lk.ijse.spring.dto;


import com.oracle.webservices.internal.api.databinding.DatabindingMode;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author : Isuri Disanayaka
 * @date:16/06/2021
 * @since : 0.0.1
 **/
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerDTO {
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
