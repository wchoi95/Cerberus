package com.g20.cerberus;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

import java.util.Scanner;

public class Chat implements Runnable {
    private UserList userlist;
    private ServerSocket serverSocket;
    private Thread chatThread;
    public Socket socket;

    
    public Chat (int port, UserList userlist) {
      this.userlist = userlist;

      try {
        serverSocket = new ServerSocket(port);
        System.out.println("Chat server is running");
      } catch(IOException e) {
        e.printStackTrace();
      }
      chatThread = new Thread(this, "chat");
      chatThread.start();
    }

    public void run() {
      try {
        serve();
      } catch (IOException e) {
      }

    }

    /**
  	 * Run the server, listening for connections and handling them.
  	 *
  	 * @throws IOException
  	 *             if the main server socket is broken
  	 */
  	public void serve() throws IOException {
  		while (true) {
  			// block until a client connects
  	        Socket socket = serverSocket.accept();
  	        this.socket = socket;
  			try {
  				handle(socket);
  			} catch (IOException ioe) {
  				ioe.printStackTrace(); // but don't terminate serve()
  			} finally {
  				socket.close();
  			}
  		}
  	}

  	/**
  	 * Handle one client connection. Returns when client disconnects.
  	 *
  	 * @param socket
  	 *            socket where client is connected
  	 * @throws IOException
  	 *             if connection encounters an error
  	 */
  	private void handle(Socket socket) throws IOException {
  		System.out.println("Chat client connected");

  		// get the socket's input stream, and wrap converters around it
  		// that convert it from a byte stream to a character stream,
  		// and that buffer it so that we can read a line at a time
  		BufferedReader in = new BufferedReader(new InputStreamReader(
  				socket.getInputStream()));

  		// similarly, wrap character=>bytestream converter around the
  		// socket output stream, and wrap a PrintWriter around that so
  		// that we have more convenient ways to write Java primitive
  		// types to it.

  		try {
  			// each request is a single line containing a number
  			for (String line = in.readLine(); line != null; line = in
  					.readLine()) {
                for(User u: this.userlist.getUserList()) {
                	if(u.getSerialID().equals(line.substring(0, 8))) {
                		u.addNewMessage(line.substring(8));
                	    break;	
                	}
                }
  			}
  		} finally {

  			in.close();
  		}
  	}

    /*public String sendMessage() {
      if (!messageSent) {
        messageSent = true;
        return messageToSend;
      } else {
        return "";
      }
    }*/

    public boolean receiveMessage (String message) {
      PrintWriter out;
      try {
        out = new PrintWriter(new OutputStreamWriter(
            socket.getOutputStream()));
        out.println(message);
        out.flush();
      } catch (IOException e) {

      }

      return true;
    }

}
