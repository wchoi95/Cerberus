package com.g20.cerberus;

import javax.management.InvalidAttributeValueException;

public class User {
	private String username;
	private String password;

	/**
	 * @param username
	 * @param password
	 */
	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}

	/**
	 * @return Password of the user
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @return Username of the user
	 */
	public String getUsername() {
		return username;
	}

}
