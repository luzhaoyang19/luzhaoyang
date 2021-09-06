package com.example.testeureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/*Eureka服务器*/
@SpringBootApplication
@EnableEurekaServer
public class TestEurekaApplication {

    public static void main(String[] args) {
        SpringApplication.run(TestEurekaApplication.class, args);
    }

}
