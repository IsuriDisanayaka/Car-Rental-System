package lk.ijse.spring.service.impl;

import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/
@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    private CustomerRepo customerRepo;

    enum result{CUSTOMERNOTFOUND,CUSTOMERDETAILRIGHT,CUSTOMERDETAILWRONG}
    @Override
    public Enum checkCustomer(String userName, String password) {
        Optional<Customer> customer = customerRepo.findById(userName);
        if(customer.isPresent()){
            Customer user = customer.get();
            if(user.getPassword().equals(password.trim())){
                return result.CUSTOMERDETAILRIGHT;
            }else{
                return result.CUSTOMERDETAILWRONG;
            }
        }
        return result.CUSTOMERNOTFOUND;



    }

    @Override
    public boolean findcustomer(String userName) {
        return customerRepo.existsById(userName);

    }
}
