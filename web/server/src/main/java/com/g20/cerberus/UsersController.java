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
public class UsersController {

    private UserList userList = new UserList();

    @CrossOrigin(origins = "http://38.88.74.71:9001")
    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public User getUser(@RequestParam(required=true) int id) {
        return userList.getUser(id);
    }

    @CrossOrigin(origins = "http://38.88.74.71:9001")
    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public int createUser(@RequestParam(required=true) String name) {
      return userList.addUser(name);
    }

}
