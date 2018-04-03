import sys
import RPi.GPIO as GPIO
sys.path.insert(0, '/home/pi/Desktop/P2/KnockKnock')
import knockknock
import sys
sys.path.insert(0, '/home/pi/Desktop/P2/Messenger')
import keypad
import time


def knockKnock():
    secretKnocks = 0
    wrongKnocks = 0
    print('Please input your secret knock')
    while not knockknock.updateSecretKnock():
        if(secretKnocks > 3):
            print('You did not input a valid knock knock')
            print('Secret knock is set to default knock')
            knockknock.secretKnockLength = 5
            knockknock.secretKnock = [1,1,1,0.5,0.5]
        secretKnocks += 1
        print('Please input your secret knock')
    isValid = 0
    while not isValid:
        
        if(wrongKnocks > 3):
            print('You have reached max attempts')
            print('See you later!')
            break
        knockknock.gaps = []
        print ('Please Knock')
        knockknock.validateKnock()
        print('Validating...')
        isValid = knockknock.isValidPattern()
        time.sleep(1)
        if isValid:
            print('Come on in')
        else:
            print('Wrong knock')
            time.sleep(0.5)
            wrongKnocks += 1
        print('')
        print('')
i = 0
j = 0
def buttonPressed():
    global i
    global j
    i = 0
    j = 0
    for j in range(3):
        print(j)
        keypad.GPIO.output(keypad.COL[j], 0)
        for i in range(4):
            print(i)
            if keypad.GPIO.input(keypad.ROW[i]) == 0:
                time.sleep(1)
                print(i, j)
                time.sleep(1)
                keypad.GPIO.output(keypad.COL[j], 1)
                return True
    GPIO.output(keypad.COL[j], 1)
    return False

def checkForVisitor():
    if buttonPressed():
        # Wait till unpressed
        while(keypad.GPIO.input(keypad.ROW[i]) == 0):
            pass
        return True
    return knockknock.mcp.read_adc(0) > 70

def settings():
    keypad.displayOnLcd("Settings", "")
    time.sleep(2)

def askForAccessChoice():
    start = time.time()
    keypad.displayOnLcd("1:Knock 2:Text ", "3:Settings")
    #while not buttonPressed():
     #   if time.time() - start > 5 :
      #      keypad.displayOnLcd("No response!", "See you!")
       #     time.sleep(2)
        #    return 0
    print('somthing pressed')
    while True:
         for j in range(3):
                    GPIO.output(keypad.COL[j], 0)
                    for i in range(4):
                        if GPIO.input(keypad.ROW[i]) == 0: 
                            #continue as loong as the button is held down
                            
                            while(GPIO.input(keypad.ROW[i]) == 0):
                                pass
                            #print('salam ' + keypad.NUM_MATRIX[i][j])
                            return keypad.NUM_MATRIX[i][j]
                    
                    GPIO.output(keypad.COL[j], 1)
    
    return 10

    
while True:
    keypad.displayOnLcd("Press a key or", "knock to start")

    while not checkForVisitor():
        pass
    accessChoice = askForAccessChoice()
    print(accessChoice)
    if accessChoice == '0':
        continue
    # Knockknock
    elif accessChoice == '1':
        knockKnock()
        #print('in  1')
    # Keypad
    elif accessChoice == '2':
        keypad.talkToOwner()
        #print('in  2')
    # Settings
    elif accessChoice == 3:
        settings()
        #print('in  3')
    else:
        keypad.displayOnLcd("Invalid Input!", "See you!")
        time.sleep(2)
    break
