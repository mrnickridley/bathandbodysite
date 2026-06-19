package ridspa.ridspa.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ridspa.ridspa.model.payPalUserTransactionData;
import ridspa.ridspa.repo.payPalUserDataRepo;
import ridspa.ridspa.repo.payPalUserTransactionRepo;
import ridspa.ridspa.service.payPalUserDataService;


@RestController
@RequestMapping("/paypalapi")
public class payPalUserDataController {
    
    payPalUserDataRepo repo;

    payPalUserTransactionRepo repoTwo;

    private final payPalUserDataService serv;

    public payPalUserDataController(payPalUserDataRepo repo, payPalUserDataService serv){
        this.repo = repo;
        this.serv = serv;
    }

    @PostMapping("/createorder")
    @CrossOrigin
    public  ResponseEntity<String> createOrder(@RequestBody Map<String, String> request){

        try{
            String amount = request.get("amount");
            String currency = request.get("currency");

            String orderResponse = serv.createOrder(amount, currency);

            return ResponseEntity.ok(orderResponse);
        } catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PostMapping("/captureorder/{orderId}")
    @CrossOrigin
    public ResponseEntity<String> captureOrder(@PathVariable String orderId){
        try{
            String captureResponse = serv.captureOrder(orderId);
            return ResponseEntity.ok(captureResponse);
        } catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Faiuled to Capture Order: " + e.getMessage());
        }
    }

    @GetMapping("/getallorders")
    @CrossOrigin
    public List<payPalUserTransactionData> getAllTransactions(){
        return repoTwo.findAll();
    }
}
