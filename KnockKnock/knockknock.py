# Simple example of reading the MCP3008 analog input channels and printing
# them all out.
# Author: Tony DiCola
# License: Public Domain
import time

# Import SPI library (for hardware SPI) and MCP3008 library.
import Adafruit_GPIO.SPI as SPI
import Adafruit_MCP3008


# Software SPI configuration:
#CLK  = 18
#MISO = 23
#MOSI = 24
#CS   = 25
#mcp = Adafruit_MCP3008.MCP3008(clk=CLK, cs=CS, miso=MISO, mosi=MOSI)

# Hardware SPI configuration:
SPI_PORT   = 0
SPI_DEVICE = 0
mcp = Adafruit_MCP3008.MCP3008(spi=SPI.SpiDev(SPI_PORT, SPI_DEVICE))

secretKnock = [1,1,1,0.5,0.5]
gaps = []
secretKnockLength = 5

def getLowerBound(gap):
    if gap < 1.5:
        return gap - gap/2
    if gap < 3:
        return gap - gap/3
    if gap < 4:
        return gap - gap/4
    return gap - 1.5
        
def getUpperBound(gap):
    if gap < 1.5:
        return gap + gap/2
    if gap < 3:
        return gap + gap/3
    if gap < 4:
        return gap + gap/4
    return gap - 1.5

def assignGap(gaps, past):
    if len(gaps) <= secretKnockLength:
        gaps.append(time.time() - past)

def isValidPattern():
    if not len(gaps) == secretKnockLength:
        return False
    #print (gaps)
    i = 0
    for num in secretKnock:
        if not ((gaps[i] > getLowerBound(num)) & (gaps[i] < getUpperBound(num))):
            return False
        print(i)
        print(len(secretKnock))
        
        i += 1
    return True

def updateSecretKnock():
    global secretKnockLength
    global secretKnock
    secretKnock = []
    secretKnockLength = 0
    past = 0
    startTime = time.time()
    while True:
        # Time out
        if (time.time() - startTime > 10):
            break
        if mcp.read_adc(0) > 70:
            time.sleep(0.1)
            if past == 0:
                past = time.time()
            else:
                assignGap(secretKnock,past)
                secretKnockLength += 1
                past = time.time()
    
    if (secretKnockLength < 1) & (secretKnockLength == 0):
        print('You did not input a knock')
        print('Secret knock is set to default knock')
        secretKnockLength = 5
        secretKnock = [1,1,1,0.5,0.5]
        return True
    elif (secretKnockLength == 1):
        print('Secret knock has to be at least of length 2')
        print('Please try again...')
        return False
    return True
        

def validateKnock():
    past = 0
    value = 0
    start = time.time()
    while True:
        # Time out
        if (time.time() - start > 10):
            break
        # Done Knocking
        if len(gaps) == secretKnockLength:
            print('fd')
            break
        # Detect a knock.
        if mcp.read_adc(0) > 70:
            #print('knock')
            #print(value)
            value += 1
            time.sleep(0.1)
            # Get gaps
            if past == 0:
                past = time.time()
            else:
                assignGap(gaps, past)
                past = time.time()
            print (gaps)


