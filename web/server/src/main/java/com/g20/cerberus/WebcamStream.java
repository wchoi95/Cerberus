package com.g20.cerberus;

import com.github.sarxos.webcam.Webcam;
import java.awt.image.BufferedImage;
import java.awt.Dimension;
import javax.imageio.ImageIO;
import java.io.File;
import java.io.IOException;
import java.io.ByteArrayOutputStream;
import java.io.UnsupportedEncodingException;
import java.util.Base64;
import java.net.ServerSocket;
import java.net.Socket;

public class WebcamStream implements Runnable {

  private ServerSocket serverSocket;
  private BufferedImage bimg;
  private Thread videoThread;
  private UserList userList;

  public WebcamStream(int port, UserList userList) {
    this.userList = userList;
    bimg = new BufferedImage(1, 1, BufferedImage.TYPE_INT_RGB);

    try {
      serverSocket = new ServerSocket(port);
      System.out.println("Webcam server is running");
    	serverSocket.setSoTimeout(180000);
    } catch (IOException e) {
      System.out.println("Webcam server failed to run");
    }
    videoThread = new Thread(this, "video");
    videoThread.start();

  }

  public void run() {
    try {
      serve();
    } catch (IOException e) {
    }
  }

  public void serve() throws IOException {
		while (true) {
			// block until a client connects
			Socket socket = serverSocket.accept();
			try {
				handle(socket);
			} catch (IOException ioe) {
				ioe.printStackTrace(); // but don't terminate serve()
			} finally {
				socket.close();
			}
		}
	}

	public void handle(Socket server) throws IOException {
    int bytesToRead = 8;
    String serialID = "";

    for (int i = 0; i < bytesToRead; i++) {
      int byteRead = server.getInputStream().read();
      if (byteRead >= 0 && byteRead < 10) {
        serialID += byteRead;
      } else {
        serialID += (char)byteRead;
      }
    }

		bimg = ImageIO.read(ImageIO.createImageInputStream(server.getInputStream()));
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    try {
      ImageIO.write(bimg, "JPG", baos);
    } catch(IOException e) {

    }

    for (User u : userList.getUserList()) {
      if (u.getSerialID().equals(serialID)) {
        u.setImageString(Base64.getEncoder().encodeToString(baos.toByteArray()));
      }
    }
	}

}
