package lk.ijse.spring.exception;

/**
 * @author : Isuri Disanayaka
 * @date:16/06/2021
 * @since : 0.0.1
 **/
public class ValidateException extends RuntimeException{
    public ValidateException(String message){
        super(message);
    }
}
