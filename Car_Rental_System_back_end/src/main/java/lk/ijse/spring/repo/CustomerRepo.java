package lk.ijse.spring.repo;


import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


/**
 * @author : Isuri Disanayaka
 * @date:16/06/2021
 * @since : 0.0.1
 **/
public interface CustomerRepo extends JpaRepository<Customer,String> {
    @Query(value = "SELECT * from customer where name =:name", nativeQuery = true)
    List<Customer> findCustomersByName(@Param("name") String id);

}
