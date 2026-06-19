package ridspa.ridspa.service;

import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import ridspa.ridspa.model.payPalUserData;
import ridspa.ridspa.model.payPalUserTransactionData;
import ridspa.ridspa.repo.payPalUserDataRepo;
import ridspa.ridspa.repo.payPalUserTransactionRepo;

import java.time.LocalDateTime;
import java.util.Base64;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;



@Service
public class payPalUserDataService {

    @Value("${paypal.client-id}")
    private String clientId;

    @Value("${paypal.client-secret}")
    private String clientSecret;

    @Value("${paypal.api-url}")
    private String paypalApiUrl;

    private final RestTemplate restTemplate;

    private final payPalUserDataRepo paypalRepo;

    private final payPalUserTransactionRepo transactionRepo;

    public payPalUserDataService(RestTemplate restTemplate, payPalUserDataRepo paypalRepo, payPalUserTransactionRepo transactionRepo){
        this.restTemplate = restTemplate;
        this.paypalRepo = paypalRepo;
        this.transactionRepo = transactionRepo;
    }

    /*------------------------------------------------------------------------- */

    /*Method "myToken()" : purpose is to fetch an OAuth 2.0 access token from Paypal using client credntials*/
    public String paypalToken(){

        /*
        PREPARE THE HEADERS: 
            1.)The clientId and clientSecret are concatenated witha colon(:) to form the credentials
            2.)These credentials are Base64 encoded to comply with the Basic Auth header format
            3.) the encoded string is added to the Autorization header as Basic<encoded-credentials>
        */
        String tokenCredentials = clientId + ":" + clientSecret;
        String encodedCredentials = Base64.getEncoder().encodeToString(tokenCredentials.getBytes());
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Basic " + encodedCredentials);

        /*
        PREPARE THE REQUEST BODY:
            1.) The body is set as a "grant_type=client_credentials" key-value pair.
            2.) This specifies that the client wants to autheniticate using its credentials
        */
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "client_credentials");

        /*
        "HttpEntity":
            1.) Combines the headers and the body into a single object that can be sent int an Http request
        */
        HttpEntity<MultiValueMap<String,String>> request = new HttpEntity<>(body, headers);

        /*
        MAKE THE REQUEST:
            1.) The "template.exchange()"" method sends a POST request to the PayPal API URL(apiURL) with the given headers and body.
            2.) The response is mapped into the "Map" object for easy parsing
        */
        ResponseEntity<Map> response = restTemplate.exchange(paypalApiUrl,
                                                            HttpMethod.POST,
                                                            request,
                                                            Map.class);   
        

        /*
        EXTRACT THE TOKEN:
            1.) The response body (Map) is inspected for the key "access_token"
            2.) If the token is found, it is returned as a string
            3.) If the token is not found, an exception is thrown to indicate the operation field 
        */
        Map<String, Object> responseBody = response.getBody();
        if(responseBody != null && responseBody.containsKey("access_token")){
            return responseBody.get("access_token").toString();
        } else{
            throw new RuntimeException("Cannot retrieve access token!");
        }
    }

    /*---------------------------------------------------------------------------------- */

    /* 
    The throws JsonProcessingException:
        1. Tells the Java compiler that the method might throw a JsonProcessingException during execution.
        2. Calling this method must either handle it (using a try-catch block) or declare it in its own throws clause.
    */
    public String createOrder(String amount, String currency) throws JsonProcessingException{

        String token = paypalToken();

        /*The "Authorization" header includes the Bearer token (token). 
                1.) This authenticates the request
        */
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.setContentType(MediaType.APPLICATION_JSON);

        /*
        Explanation:
            1.) This code constructs a JSON-formatted string using Java's String.format()
            2.) The '"intent": "CAPTURE"' specifies that this order is intended for immediate payment.
            3.) The %s in Java (or many other programming languages) is a format specifier used in string formatting:
                    A.) It acts as a placeholder for a string and is replaced by a value when the formatted string is created.
                    B.) In Java, %s is used with methods like String.format() to insert strings into a formatted template
            4.) To explain "currency,amount,description,payerEmail" at the end of variable: 
                    A.) "currency_code" will be replaced by value of currency
                    B.) "value":"%s" will be replaced by the value of amount
                    C.) "description":"%s" will be replaced by the value of description
                D.) "payeremail:"%s"" will be replaced by the value of payerEmail
            5.) "application_context":
                    A.) This section is required to define specific PayPal behaviors, such as how the user interacts with the approval page.
            6. "return_url:"
                    A.) URL where PayPal redirects the user after they approve the payment.
                    B.) This should be an endpoint in your Spring Boot application, (e.g., /complete-order), to handle order capture.
            7."cancel_url:"
                    A.) URL where PayPal redirects the user if they cancel the payment.

        */
        String requestBody = String.format("""
                            { 
                                "intent":"CAPTURE",
                                "purchase_units":[
                                            {
                                                    "amount":{
                                                                "currency_code": "%s",
                                                                "value":"%s"
                                                                }
                                                    }
                                                ],
                                                    "application_context":{
                                                        "return_url":"https://www.thebathandbodyemporium.com/sitecheckoutpage/checkoutpage.html",
                                                        "cancel_url":"https://www.thebathandbodyemporium.com/sitecheckoutpage/checkoutpage.html",
                                                        "brand_name":"YourBrandName",
                                                        "landing_page":"LOGIN",
                                                        "user_action":"CONTINUE"
                                                    }
                                                }""", currency,amount);

        /*
        1.) This combines the request body("bodyRequest") and headers into and HttpEntity.
            A.) This will be sent to the Paypal API.
            B.) "HttpEntity" passes the request body and headers when making HTTP calls.
        */
        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

        /*
        ".postForEntity":
            1.) sends an HTTP POST request to the specified URL ()
        */
        ResponseEntity<String> response = restTemplate.postForEntity("https://api-m.paypal.com/v2/checkout/orders", request, String.class);


        if(response.getStatusCode() == HttpStatus.CREATED){
            String responseBody = response.getBody();

            // Parse JSON Response
            JsonNode jsonResponse = new ObjectMapper().readTree(responseBody);
            String orderId = jsonResponse.get("id").asText();
            String status = jsonResponse.get("status").asText();

            // Save to Database
            payPalUserData order = new payPalUserData();
            order.setOrderId(orderId);
            order.setStatus(status);
            order.setAmount(amount);
            order.setCurrency(currency);
            order.setTimeOfCreatedOrder(LocalDateTime.now());

            paypalRepo.save(order);

            System.out.println(responseBody);
            return responseBody;
        } else{
                throw new RuntimeException("Failed creating PayPal Order");
            }
        
    }
    /*How It Works in Context:
            *   1. THIS METHOD SETS UP A REST API CALL TO PayPal's environment for transaction purposes
                2. It creates a Paypal order with the specified amount and intent
                3. After receiving a response from Paypal, the method returns the order details to the frontend. 
    */

    /*------------------------------------------------------------------------------------- */
    public void saveTrans(payPalUserTransactionData transactionModel){
        transactionRepo.save(transactionModel);
    }
    /*------------------------------------------------------------------------------------- */

    /*
    "captureOrder:"
        1.) is designed to perform the following operations:
            A.) Make a POST request to the PayPal Capture API
            B.) Parse and validate the response
            C.) extract critical information
            D.) save the information into the database
    */
    public String captureOrder(String orderId) throws JsonProcessingException{

        /*
        Retrieving the Access Token:
            1.) This fetches the authorization token(Bearer Token) required for the PayPal authentication.
                A.) This ensures the API request is authenticated
        */
        String token = paypalToken();

        /*
         Set Up HTTP Headers:
            1.) This sets the content type to "application/json", ensuring the API knows the type of data being sent.
            2.) This also, adds the Bearer token to the Autorization header for API authentication
         */
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(token);

        /*
         Build Http Request:
            1.) This wraps the headers(and an optional body, which is null here) in an HttpEntity object to prepare for the API call
         */
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

        /*
         Paypal Capture API URL:
            1.) The Paypal Capture API URL dynamically includes the "orderId" parameter to specify the order being captured.
            2.) The "/capture" endpoint is used to finalize the payment.
         */
        String captureUrl = "https://api-m.paypal.com/v2/checkout/orders/" + orderId + "/capture";

        try{
            /*
             'restTemplate' which is the name of the injected "RestTemplate" class makes an HTTP request, specifically POST, and handles the response. 
                1.) "restTemplate.exchange" is used to perform HTTP requests. It allows you to specify the HTTP method, URL, request entity(headers + body), and the type of response you expect.
                    A.) The ".exhange" method returns a "ResponseEntity" object that contains a HTTP Status Code(200 Ok, 400 BAd Request, etc.), Headers, and a Body.
                2.) "captureURL" is the URL in which the POST request will be sent
                3.) "HttpMethod.POST" indicates that the HTTP method for this request is POST
                4.) "requestEnity" is the instance of HttpEntity that encapsulates the request data, including: Headers & Body
                5.) "String.class" specifies the type of response body. In this case the response is expected to be a String."
             */
            ResponseEntity<String> response = restTemplate.exchange(captureUrl, 
                                                                    HttpMethod.POST,
                                                                    requestEntity,
                                                                    String.class
                                                                    );

            if(response.getStatusCode().is2xxSuccessful()){

                // Parse and handle the JSON response  
                String responseBody = response.getBody();
                JsonNode jsonResponse = new ObjectMapper().readTree(responseBody);
            
                // Extract the status of the order (check if field exists)
                String status = jsonResponse.has("status") ? jsonResponse.get("status").asText() : "UNKNOWN";

                // Extract purchase_units array and check if it has values
                JsonNode unitsPurchased = jsonResponse.get("purchase_units");
                double priceAmount = 0.0;
                String transactionId = null;

                /*
                1.) The (unitsPurchased != null) checks if the "unitsPurchased" array exists
                2.) ".isArray" checks if unitsPurchased is an Array
                3.) "size() > 0" checks if array is not empty
                */
                if(unitsPurchased != null && unitsPurchased.isArray() && unitsPurchased.size() > 0){
                    JsonNode purchasedUnits = unitsPurchased.get(0);

                    //Extracting Payment Information
                    JsonNode paymentsNode = purchasedUnits.get("payments");
                    if(paymentsNode != null && paymentsNode.has("captures")){
                        JsonNode capturesNode = paymentsNode.get("captures");

                        if(capturesNode.isArray() && capturesNode.size() > 0){
                            JsonNode capture = capturesNode.get(0);

                            if(capture.has("amount") && capture.get("amount").has("value")){
                                priceAmount = capture.get("amount").get("value").asDouble();
                            }
                        }
                    }
                    
                    //Extracting the Transaction Id
                    JsonNode paymentNode = purchasedUnits.get("payments");
                    if(paymentNode != null && paymentNode.has("captures") && paymentNode.get("captures").isArray() && paymentNode.get("captures").size() > 0){
                        JsonNode captureNode = paymentNode.get("captures").get(0);

                        if(captureNode.has("id")){
                            transactionId = captureNode.get("id").asText();
                        }
                    }

                    if(transactionId == null){
                        throw new IllegalStateException("Missing transaction ID in PayPal response.");
                    }
            } 

            // Extract payer email 
            String payerEmail = jsonResponse.has("payer") && jsonResponse.get("payer").has("email_address")
                                ? jsonResponse.get("payer").get("email_address").asText() : "unknown";

            // Extract shipping address 
            String shippingAddress = jsonResponse.has("purchase_units")
                                    && jsonResponse.get("purchase_units").isArray()
                                    && jsonResponse.get("purchase_units").get(0).has("shipping")
                                    && jsonResponse.get("purchase_units").get(0).get("shipping").has("address")
                                    ? jsonResponse.get("purchase_units").get(0).get("shipping").get("address").toString()
                                    : "unknown";
            // Extract customername 
            String customerName = jsonResponse.has("purchase_units")
                                 && jsonResponse.get("purchase_units").isArray()
                                 && jsonResponse.get("purchase_units").get(0).has("shipping")
                                 && jsonResponse.get("purchase_units").get(0).get("shipping").has("name")
                                 ? jsonResponse.get("purchase_units").get(0).get("shipping").get("name").toString()
                                 : "unknown";
            
            // Save transaction information to the database
            payPalUserTransactionData transaction = new payPalUserTransactionData();
            transaction.setOrderId(orderId);
            transaction.setStatus(status);
            transaction.setTransactionId(transactionId != null ? transactionId : "unknown");
            transaction.setCustomerName(customerName);
            transaction.setPayerEmail(payerEmail);
            transaction.setPriceAmount(priceAmount);
            transaction.setShippingAddress(shippingAddress);
            transaction.setTimeOfTransaction(LocalDateTime.now());

            saveTrans(transaction);

            System.out.println(responseBody);
            System.out.println("Order Status: " + status);
            System.out.println("Full Response: " + responseBody);  
            return responseBody;
            
            }else{
                throw new RuntimeException("Failed to capture order. HTTP Status: " + response.getStatusCode());
            }

    }catch(HttpClientErrorException e){
                throw new RuntimeException("Error parsing PayPal response: " + e.getMessage(), e);
            }

    }
}


