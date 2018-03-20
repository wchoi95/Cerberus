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

public class WebcamStream {

  private Webcam webcam;

  public WebcamStream() {
    webcam = Webcam.getWebcams().get(0);
		webcam.setViewSize(new Dimension(320, 240));
		webcam.open();
  }

  public String captureImage() {
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    BufferedImage img = webcam.getImage();
    try {
      ImageIO.write(img, "JPG", baos);
    } catch(IOException e) {

    }

    return Base64.getEncoder().encodeToString(baos.toByteArray());
  }
}
