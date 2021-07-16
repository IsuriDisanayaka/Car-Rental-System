package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CarDTO;
import lk.ijse.spring.exception.NotFoundException;
import lk.ijse.spring.service.CarService;
import lk.ijse.spring.utill.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/
@RestController
@RequestMapping("/api/v1/car")
@CrossOrigin
public class CarController {
    @Autowired
    private CarService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCar(
            @RequestBody CarDTO dto) {
        if (dto.getCarID().trim().length() <= 0) {
            throw new NotFoundException("Car id cannot be empty");
        }
        service.addCar(dto);
        return new ResponseEntity(new StandradResponse("201", "Done", dto), HttpStatus.CREATED);
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCars() {
        ArrayList<CarDTO> allCars = service.getAllCars();
        return new ResponseEntity(new StandradResponse("200", "Done",
                allCars), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String id) {
        CarDTO carDTO = service.searchCar(id);
        return new ResponseEntity(new StandradResponse("200", "Done", carDTO), HttpStatus.OK);
    }


    @DeleteMapping(params = {"id"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity deleteCar(@RequestParam String id) {
        service.deleteCar(id);
        return new ResponseEntity(new StandradResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCustomer(@RequestBody CarDTO dto) {
        if (dto.getCarID().trim().length() <= 0) {
            throw new NotFoundException("No id provided to update");
        }
        service.updateCar(dto);
        return new ResponseEntity(new StandradResponse("200", "Done", dto), HttpStatus.OK);
    }


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public boolean saveFile(@RequestPart("myFile") MultipartFile myFile) {
        /*
         * There are three ways we can obtain this value, but in all cases we need to use
         * @RequestPart annotation.
         * 1. Byte Array ( byte [] )
         * 2. MultipartFile ( Spring way )
         * 3. Part ( Java EE way )
         */
        //  01.First we need to configure MultipartResolver
        //  02.We need to override  method inorder to set MultipartConfigElement
        //  Check WebAppConfig and WebAppInitializer
        //  In spring boot we dont need to add those two configurations

        System.out.println(myFile.getOriginalFilename());
        ;

        try {
            // Let's get the project location
            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).
                    getParentFile().getParentFile().getAbsolutePath();
            // Let's create a folder there for uploading purposes, if not exists
            File uploadsDir = new File(projectPath + "/uploads");
            uploadsDir.mkdir();
            // It is time to transfer the file into the newly created dir
            myFile.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + myFile.getOriginalFilename()));
            return true;
        } catch (URISyntaxException e) {
            e.printStackTrace();
            return false;
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }

    @GetMapping(path = "/type/{type}")
    public ResponseEntity searchCarbytype(@PathVariable("type") String id) {
        List<CarDTO> allSerchCars = service.searchCarbyType(id);
        StandradResponse response = new StandradResponse("200", "Success", allSerchCars);
        return new ResponseEntity(response, HttpStatus.OK);
    }
}

