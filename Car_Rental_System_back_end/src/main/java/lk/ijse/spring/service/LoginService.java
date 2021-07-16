package lk.ijse.spring.service;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/

public interface LoginService {
    Enum checkCustomer(String userName, String password);
    boolean findcustomer(String userName);
}
