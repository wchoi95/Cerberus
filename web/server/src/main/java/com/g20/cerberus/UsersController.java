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

    private UserList userList = new UserList("./users-database/usersDatabase.txt");

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/createuser", method = RequestMethod.POST)
    public boolean createUser(@RequestParam(required=true) String username, @RequestParam(required=true) String password) {
      return userList.addUser(username, password);
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(@RequestParam(required=true) String username, @RequestParam(required=true) String password) {
      return userList.login(username, password);
    }

}
