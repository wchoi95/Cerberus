import socket
import sys
import pygame
import pygame.camera
port = 9004
pygame.init()
pygame.camera.init()

#create fullscreen display 640x480
screen = pygame.display.set_mode((640,480),0)

#find, open and start low-res camera
cam_list = pygame.camera.list_cameras()
webcam = pygame.camera.Camera(cam_list[0],(32,24))
webcam.start()
count = 0;
while count < 200:
    #grab image, scale and blit to screen
    #print('salam')
    count = count + 1
    imagen = webcam.get_image()
    #sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    #sock.connect(('localhost', port))
    string = pygame.image.tostring(imagen, 'RGB')
    print
    #sock.send("X1Y2Z3T4".encode('utf-8'))
    #sock.sendall(string)
    #sock.close()
    imagen = pygame.transform.scale(imagen,(640,480))
    screen.blit(imagen,(0,0))

    #draw all updates to display
    pygame.display.update()

    # check for quit events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
           webcam.stop()
           pygame.quit()
           sys.exit()