package com.g20.cerberus;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {

    Chat chatServer = new Chat (9005);

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/chat/{username}", method = RequestMethod.POST)
    public boolean getMessage(@RequestParam(required=true) String message) {
        return chatServer.receiveMessage(message);
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/chatget/{username}", method = RequestMethod.GET)
    public String sendMessage() {
        return chatServer.sendMessage();
    }

}
