package lk.ijse.spring.controller;

import lk.ijse.spring.dto.BookingDTO;
import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.entity.Booking;
import lk.ijse.spring.exception.NotFoundException;
import lk.ijse.spring.service.BookingService;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.utill.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Isuri Disanayaka
 * @date:25/06/2021
 * @since : 0.0.1
 **/
@RestController
@RequestMapping("/api/v1/booking")
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveBooking(
            @RequestBody BookingDTO dto) {
        if (dto.getBookingID().trim().length() <= 0) {
            throw new NotFoundException("Booking id cannot be empty");
        }
        service.addBooking(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }
}
