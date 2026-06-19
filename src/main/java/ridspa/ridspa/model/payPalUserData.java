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
@Table(schema="ridspa", name="paypaluserorders")
@Getter
@Setter
public class payPalUserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    @Column(name="orderid")
    private String orderId; // PayPal Order ID, Provided by PayPal's API

    @Column(name="status")
    public String status; // PayPal Order Status (e.g., CREATED, APPROVED, COMPLETED), Provided by PayPal's API

    @Column(name="amount")
    public String amount; // Order Amount, manually input by user

    @Column(name="currency")
    public String currency; // Currency (e.g., USD), manually input by user

    @Column(name="description") 
    public String description; // Optional Order Description, manually input by user

    @Column(name="payeremail")
    public String payerEmail; // Payer's Email (if available)

    @Column(name="timeofcreatedorder")
    public LocalDateTime timeOfCreatedOrder; // Order Creation Timestamp, provided by Java Spring Boot.

    public payPalUserData(){
        super();
    }

    public payPalUserData(int id, String orderId, String status, String amount,
                            String currency, String description, String payerEmail, LocalDateTime timeOfCreatedOrder)
    {
        this.id = id;
        this.orderId = orderId;
        this.status = status;
        this.amount = amount;
        this.currency = currency;
        this.description = description;
        this.payerEmail = payerEmail;
        this.timeOfCreatedOrder = timeOfCreatedOrder;
    }
}
