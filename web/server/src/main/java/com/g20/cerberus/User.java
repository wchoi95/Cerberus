package com.g20.cerberus;

public class User {

    private final int id;
    private final String name;

    public User () {
        this.id = -1;
        this.name = "";
    }

    public User (int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId () {
        return id;
    }

    public String getName () {
        return name;
    }
}
