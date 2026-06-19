package ridspa.ridspa.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(schema="ridspa", name="paypalusertransactions")
@Getter
@Setter
public class payPalUserTransactionData {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name="orderid")
    private String orderId;

    @Column(name="transactionid")
    private String transactionId;

    @Column(name="status")
    private String status;

    @Column(name="customername")
    private String customerName;

    @Column(name="payeremail")
    private String payerEmail;

    @Column(name="priceamount")
    private double priceAmount;

    @Column(name="shippingaddress")
    private String shippingAddress;

    @Column(name="timeoftransaction")
    private LocalDateTime timeOfTransaction; // Order Capture Timestamp, provided by Java Spring Boot.


    public payPalUserTransactionData(){
        super();
    }

    public payPalUserTransactionData(int id, String orderId, String transactionId,String status, String customerName, String payerEmail, double priceAmount, String shippingAddress, LocalDateTime timeOfTransaction){
        this.id = id;
        this.orderId = orderId;
        this.transactionId = transactionId;
        this.status = status;
        this.customerName = customerName;
        this.payerEmail = payerEmail;
        this.priceAmount = priceAmount;
        this.shippingAddress = shippingAddress;
        this.timeOfTransaction = timeOfTransaction;
    }
}
