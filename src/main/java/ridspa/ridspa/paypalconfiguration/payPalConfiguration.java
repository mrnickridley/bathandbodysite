package ridspa.ridspa.paypalconfiguration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

/*This configuration class provides a Rest Template bean and injects the payPalService class */

@Configuration
public class payPalConfiguration {

    @Bean
    public RestTemplate template(){
        return new RestTemplate();
    }
}
