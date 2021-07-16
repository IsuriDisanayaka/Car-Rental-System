package lk.ijse.spring.service;


import lk.ijse.spring.dto.CustomerDTO;


import java.util.ArrayList;
import java.util.List;

/**
 * @author : Isuri Disanayaka
 * @date:16/06/2021
 * @since : 0.0.1
 **/
public interface CustomerService {
  void addCustomer(CustomerDTO dto);
  void deleteCustomer(String id);
  CustomerDTO searchCustomer(String id);
  ArrayList<CustomerDTO>getAllCustomers();
  void updateCustomer(CustomerDTO dto);
  List<CustomerDTO> searchCustomerbyName(String id);

//  CustomerDTO findByEmailAndPassword(String userName,String password);
//  boolean findUser(String userName);
//  CustomerDTO findNic(String Nic);
}
