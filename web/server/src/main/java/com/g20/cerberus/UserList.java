package com.g20.cerberus;

import java.util.ArrayList;

public class UserList {

    private ArrayList<User> userList;
    private int counter;

    public UserList () {
        this.userList = new ArrayList<User>();
        this.counter = 0;
    }

    public void addUser (String name) {
        userList.add(new User(counter++, name));
    }

    public User getUser (int id) {
        return userList.get(id);
    }
}
