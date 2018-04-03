import RPi.GPIO as GPIO
import time


GPIO.setmode (GPIO.BCM)

GPIO.setup(27, GPIO.OUT)

p = GPIO.PWM(27,70)
p.start(7.5)

def lockDoor():
    p.ChangeDutyCycle(14.5)
    time.sleep(.5)
    p.ChangeDutyCycle(0)

def unlockDoor():
    p.ChangeDutyCycle(7.5)
    time.sleep(.5)
    p.ChangeDutyCycle(0)

try:
    while True:
        lockDoor()
        time.sleep(1)
        unlockDoor()
        time.sleep(1)
            
except KeyboardInterrupt:
    GPIO.cleanup()