package com.tedu.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@RequestMapping("/hello/{yasuo}")
	public String sayHello(@PathVariable("yasuo") String yasuo) {
		return "我是提供者1"+yasuo;
		
	}
}
