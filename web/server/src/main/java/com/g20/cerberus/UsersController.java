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
    WebcamStream webcam = new WebcamStream(9004, userList);

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

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/image/{username}", method = RequestMethod.GET)
    public String getImage(@RequestParam(required=true) String username) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          return u.getImageString();
        }
      }
      return "";
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/changepassword/{username}", method = RequestMethod.POST)
    public boolean changePassword(@RequestParam(required=true) String username, @RequestParam(required=true) String oldPassword, @RequestParam(required=true) String newPassword) {
      return userList.changePassword(username, oldPassword, newPassword);
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/setserialid/{username}", method = RequestMethod.POST)
    public int setSerialID(@RequestParam(required=true) String username, @RequestParam(required=true) int serialID) {
      if (userList.changeSerialID(username, serialID)) {
        return serialID;
      } else {
        return 0;
      }
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/getserialid/{username}", method = RequestMethod.GET)
    public int getSerialID(@RequestParam(required=true) String username) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          return u.getSerialID();
        }
      }
     }

}
