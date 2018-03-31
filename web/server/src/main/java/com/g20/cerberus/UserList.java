package com.g20.cerberus;

import java.util.ArrayList;

public class UserList {

    private ArrayList<User> userList;

    public UserList () {
        this.userList = new ArrayList<User>();
    }

    public boolean addUser (String username, String password) {
        for (User u : userList) {
          if (u.getUsername().equals(username))
            return false;
        }

        userList.add(new User(username, password));
        return true;
    }

    public String login (String username, String password) {
      for (User u : userList) {
        if (u.getUsername().equals(username)) {
          if (u.getPassword().equals(password)) {
            return username;
          } else {
            return "ERR: INVALID PASS";
          }
        }
      }

      return "ERR: NO USER";



    }

}
