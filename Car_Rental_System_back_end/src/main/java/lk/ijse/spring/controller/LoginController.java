package lk.ijse.spring.controller;

import lk.ijse.spring.service.DriverService;
import lk.ijse.spring.service.LoginService;
import lk.ijse.spring.utill.StandradResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author : Isuri Disanayaka
 * @date:23/06/2021
 * @since : 0.0.1
 **/

@RestController
@RequestMapping("/api/v1/login")
@CrossOrigin
public class LoginController {
    @Autowired
    private LoginService loginService;
    @GetMapping(path = "/{userName}/{password}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity searchCustomer(@PathVariable String userName, @PathVariable String password) {

        Enum anEnum = loginService.checkCustomer(userName,password);
        return new ResponseEntity(new StandradResponse("200", "Done", anEnum), HttpStatus.OK);
    }
}
