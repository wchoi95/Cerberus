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
import java.awt.image.BufferedImage;

@RestController
public class WebcamController {

    WebcamStream webcam = new WebcamStream(9004);

    @CrossOrigin(origins = "http://localhost:9001")
    @RequestMapping(value = "/image", method = RequestMethod.GET)
    public String getImage() {
      return webcam.captureImage();
    }

}
