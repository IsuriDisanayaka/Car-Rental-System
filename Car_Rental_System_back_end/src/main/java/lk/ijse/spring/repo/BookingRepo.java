package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : Isuri Disanayaka
 * @date:25/06/2021
 * @since : 0.0.1
 **/
public interface BookingRepo extends JpaRepository<Booking,String> {
}
