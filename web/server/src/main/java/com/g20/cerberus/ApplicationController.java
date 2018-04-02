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
public class ApplicationController {

    private UserList userList = new UserList("./users-database/usersDatabase.txt");
    WebcamStream webcam = new WebcamStream(9004, userList);
    Chat chatServer = new Chat(9005, userList);

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
    public String setSerialID(@RequestParam(required=true) String username, @RequestParam(required=true) String serialID) {
      if (userList.changeSerialID(username, serialID)) {
        return serialID;
      } else {
        return "";
      }
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/getserialid/{username}", method = RequestMethod.GET)
    public String getSerialID(@RequestParam(required=true) String username) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          return u.getSerialID();
        }
      }

      return "";
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/chat/{username}", method = RequestMethod.POST)
    public void getMessage(@RequestParam(required=true) String username, @RequestParam(required=true) String message) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          u.addNewMessage(message);
          chatServer.receiveMessage(message.substring(5), u.getSerialID());
        }
      }
    }

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/chatget/{username}", method = RequestMethod.GET)
    public String[] sendMessageArray(@RequestParam(required=true) String username) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          return u.sendMessageArray();
        }
      }

      return null;
    }

    @CrossOrigin(origins = "http://206.87.220.203:3000")
    @RequestMapping(value = "/chatmobile/{username}", method = RequestMethod.GET)
    public void getMessageMobile(@RequestParam(required=true) String username, @RequestParam(required=true) String message) {
      for (User u : userList.getUserList()) {
        if (u.getUsername().equals(username)) {
          u.addNewMessage(message);
          chatServer.receiveMessage(message.substring(5), u.getSerialID());
        }
      }
    }

    @CrossOrigin(origins = "http://206.87.220.203:3000")
    @RequestMapping(value = "/changepasswordmobile/{username}", method = RequestMethod.GET)
    public boolean changePasswordMobile(@RequestParam(required=true) String username, @RequestParam(required=true) String oldPassword, @RequestParam(required=true) String newPassword) {
      return userList.changePassword(username, oldPassword, newPassword);
    }

    @CrossOrigin(origins = "http://206.87.220.203:3000")
    @RequestMapping(value = "/setserialidmobile/{username}", method = RequestMethod.GET)
    public String setSerialIDMobile(@RequestParam(required=true) String username, @RequestParam(required=true) String serialID) {
      if (userList.changeSerialID(username, serialID)) {
        return serialID;
      } else {
        return "";
      }
    }

    @CrossOrigin(origins = "http://206.87.220.203:3000")
    @RequestMapping(value = "/createusermobile", method = RequestMethod.GET)
    public boolean createUserMobile(@RequestParam(required=true) String username, @RequestParam(required=true) String password) {
      return userList.addUser(username, password);
    }

}
