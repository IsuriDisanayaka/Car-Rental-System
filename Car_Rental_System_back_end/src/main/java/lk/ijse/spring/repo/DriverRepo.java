package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Isuri Disanayaka
 * @date:22/06/2021
 * @since : 0.0.1
 **/
public interface DriverRepo extends JpaRepository<Driver,String> {
}
