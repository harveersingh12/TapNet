package com.mod7.tapnet.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
    @RequestMapping({"/", "/{path:^(?!api).*$}"})
    public String forward() {
        return "forward:/index.html";
    }
}
