package com.g20.cerberus;

import javax.management.InvalidAttributeValueException;

public class User {
	private String username;
	private String password;
	private String serialID;
	private String imageString;
	private String[] messageHistory;
	private int messageHistorySize;

	/**
	 * @param username
	 * @param password
	 */
	public User(String username, String password, String serialID) {
		this.username = username;
		this.password = password;
		this.serialID = serialID;
		this.messageHistory = new String[]{"","","","","","","","","",""};
		this.messageHistorySize = 10;
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

	public boolean changePassword(String oldPassword, String newPassword) {
		if(!oldPassword.equals(this.password))
			return false;

	    this.password = newPassword;
	    return true;
	}

	public void setSerialID(String serialID) {
		this.serialID = serialID;
	}

	public String getSerialID() {
		return serialID;
	}

	public void setImageString(String byteString) {
		this.imageString = byteString;
	}

	public String getImageString() {
		return imageString;
	}

	public void addNewMessage(String message) {
		for (int i = 0; i < (messageHistorySize - 1); i++) {
			messageHistory[messageHistorySize - (i+1)] = messageHistory[messageHistorySize - (i+2)];
		}

		messageHistory[0] = message;

	}
}
