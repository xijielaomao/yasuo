package com.tedu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@SpringBootApplication
@EnableEurekaClient
public class RunAppProvider1 {

	public static void main(String[] args) {
		SpringApplication.run(RunAppProvider1.class, args);
	}
}
