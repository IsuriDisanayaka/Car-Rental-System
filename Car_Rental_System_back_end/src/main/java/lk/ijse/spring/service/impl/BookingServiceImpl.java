package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.BookingDTO;
import lk.ijse.spring.entity.Booking;
import lk.ijse.spring.entity.Car;
import lk.ijse.spring.exception.ValidateException;
import lk.ijse.spring.repo.BookingRepo;
import lk.ijse.spring.service.BookingService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author : Isuri Disanayaka
 * @date:25/06/2021
 * @since : 0.0.1
 **/
@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    private BookingRepo bookingRepo;
    @Autowired
    private ModelMapper mapper;
    @Override
    public void addBooking(BookingDTO dto) {
        if(bookingRepo.existsById(dto.getBookingID())){
            throw new ValidateException("Booking Already Exist");
        }
        bookingRepo.save(mapper.map(dto, Booking.class));

    }
}
