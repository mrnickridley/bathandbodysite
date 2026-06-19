package ridspa.ridspa;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ridspa.ridspa.service.payPalUserDataService;

@SpringBootApplication
public class RidspaApplication implements ApplicationRunner{

	private final payPalUserDataService serv;

	public RidspaApplication(payPalUserDataService serv){
		this.serv = serv;
	}

	public static void main(String[] args) {
		SpringApplication.run(RidspaApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args){
		String token = serv.paypalToken();
		System.out.println("Access Token: " + token);

	}

}
