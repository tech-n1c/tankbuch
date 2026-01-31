package cc.maiwald.tankbuchbackend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/test")
public class TestController {

    @RequestMapping("/hello")
    public String hello() {
        return "World";
    }
}
