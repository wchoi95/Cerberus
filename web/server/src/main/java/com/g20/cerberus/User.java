package com.g20.cerberus;

import javax.management.InvalidAttributeValueException;

public class User {
	private String username;
	private String password;
	private int serialID;
	private String imageString;

	/**
	 * @param username
	 * @param password
	 */
	public User(String username, String password, int serialID) {
		this.username = username;
		this.password = password;
		this.serialID = serialID;
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

	public void setSerialID(int serialID) {
		this.serialID = serialID;
	}

	public int getSerialID() {
		return serialID;
	}

	public void setImageString(String byteString) {
		this.imageString = byteString;
	}

	public String getImageString() {
		return imageString;
	}
}
