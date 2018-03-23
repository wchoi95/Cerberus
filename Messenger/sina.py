import sys
import RPi.GPIO as GPIO
import time


def clearLcd():
    
    # Toggle backlight on-off-on
    GPIO.output(lcd.LED_ON, True)
    time.sleep(.005)
    GPIO.output(lcd.LED_ON, False)
    time.sleep(.005)
    GPIO.output(lcd.LED_ON, True)
    time.sleep(.005)

# make sure module is in the path
sys.path.append('/home/pi/Desktop/G20_B_P2/Messenger')
import lcd

mylist = []
mylist.append('a')
mylist.append('b')
mylist.append('c')
mylist.append('d')
mylist.append('e')
mylist.pop()
print("".join(mylist))

lcd.lcd_init()
clearLcd()

# Send some centred test
lcd.lcd_byte(lcd.LCD_LINE_1, lcd.LCD_CMD)
lcd.lcd_string("".join(mylist),2)
lcd.lcd_byte(lcd.LCD_LINE_2, lcd.LCD_CMD)
lcd.lcd_string("Model B",2)
GPIO.output(lcd.LED_ON, False)


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
# initialize the string

# Print each list on a new line
def displayOnLcd(line1, line2):
    clearLcd()
    # Send some centred test
    lcd.lcd_byte(lcd.LCD_LINE_1, lcd.LCD_CMD)
    lcd.lcd_string(str("".join(line1)),2)
    lcd.lcd_byte(lcd.LCD_LINE_2, lcd.LCD_CMD)
    lcd.lcd_string(str("".join(line2)),2)
    GPIO.output(lcd.LED_ON, False)
    return
    
def getLetter (num  , pressCount):
    return LETTER_MATRIX[num - 1][pressCount]

try:
    #define vaes
    line1 = []
    list2 = []
    past = time.time()
    while(True):
        for j in range(3):
                GPIO.output(COL[j], 0)
                for i in range(4):
                    if GPIO.input(ROW[i]) == 0:
                        #if letter is pressed
                        if (NUM_MATRIX[i][j] == previousButton) & (NUM_MATRIX[i][j] > 0) & (NUM_MATRIX[i][j] < 10) & (time.time() - past < 3):
                            # replace the letter
                            if line1:
                                line1.pop()
                            if not pressCount < 3:
                                pressCount = 0
                                line1.append(str(NUM_MATRIX[i][j]))
                                displayOnLcd("".join(line1), "".join(list2))
                            else:
                                line1.append(str(getLetter (NUM_MATRIX[i][j]  , pressCount)))
                                displayOnLcd("".join(line1), "".join(list2))
                                pressCount += 1
                        #if num is pressed
                        else:
                            pressCount = 0
                            line1.append(str(NUM_MATRIX[i][j]))
                            displayOnLcd("".join(line1), "".join(list2))
                            print (NUM_MATRIX[i][j])
                            previousButton = NUM_MATRIX[i][j]
                        #continue as loong as the button is held down
                        past = time.time()
                        while(GPIO.input(ROW[i]) == 0):
                            pass
                        
                
                GPIO.output(COL[j], 1)
except KeyboardInterrupt:
    GPIO.cleanup()
    
