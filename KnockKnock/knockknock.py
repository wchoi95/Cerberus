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

validPatterns = [[1,1,1,0.5,0.5]]
gaps = [0, 0, 0, 0, 0]
patternLength = 4

def assignGap(gaps, past):
    index  = 0 
    while  (index < patternLength) & ( not gaps[index] == 0):
        index += 1;
    gaps[index] = time.time() - past

def isValidPattern():
    #print (gaps)
    for pattern in validPatterns
        for num in pattern
            if 
# Main program loop.
def validateKnock():
    past = 0
    value = 0
    while True:
        if not gaps[patternLength] == 0:
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
            #print (gaps)

while True:
    gaps = [0, 0, 0, 0, 0]
    print ('Please Knock')
    validateKnock()
    print('Validating...')
    isValid = isValidPattern()
    time.sleep(2)
    if isValid:
        print('Come on in')
    else:
        print('You fucked up')
    print('')
    print('')

