import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

NUM_MATRIX = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
    ]

LETTER_MATRIX = [
    ['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'],
    ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R'],
    ['S', 'T', 'U'], ['V', 'W', 'X'], ['Y', 'Z', 9]
    ]
ROW = [16, 18, 20, 24]
COL = [4, 25, 12]
    
def printLetter (num  , pressCount):
    print (LETTER_MATRIX[num - 1][pressCount])

for j in range(3):
    GPIO.setup(COL[j], GPIO.OUT)
    GPIO.output(COL[j], 1)
    
for i in range(4):
    GPIO.setup(ROW[i], GPIO.IN, pull_up_down = GPIO.PUD_UP)

pressCount = 0
previousButton = 10
try:
    while(True):
        for j in range(3):
                GPIO.output(COL[j], 0)
                for i in range(4):
                    if GPIO.input(ROW[i]) == 0:
                        #if letter is pressed
                        if (NUM_MATRIX[i][j] == previousButton) & (NUM_MATRIX[i][j] > 0) & (NUM_MATRIX[i][j] < 10) & (pressCount < 3):
                            printLetter(NUM_MATRIX[i][j], pressCount)
                            pressCount += 1
                        else:
                            pressCount = 0
                            print (NUM_MATRIX[i][j])
                            previousButton = NUM_MATRIX[i][j]
                        #continue as loong as the button is held down 
                        while(GPIO.input(ROW[i]) == 0):
                            pass
                        
                GPIO.output(COL[j], 1)
except KeyboardInterrupt:
    GPIO.cleanup()
    
def printLetter (num  , pressCount):
    print (LETTER_MATRIX[num - 1][pressCount])
    