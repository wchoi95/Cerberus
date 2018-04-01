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


value = 0
gaps = [0, 0, 0, 0, 0]

past = 0

def assignGap(gaps, past):
    index  = 0 
    while  (index < 4) & ( not gaps[index] == 0):
        index += 1;
    gaps[index] = time.time() - past

def validateKnock(gaps):
    print (gaps)
    #if (gaps[0] > 1) & (gaps[0] < 2)  (gaps[1] > 1) & (gaps[1] > 2) &(gaps[2] > 1) &(gaps[2] > 2) &(gaps[3] > 0.5) &(gaps[3] > 1) &(gaps[4] > 0.5) &(gaps[4] > 1):
# Main program loop.
while True:
    if not gaps[4] == 0:
        print (validateKnock(gaps))
    # Print the ADC values.
    if mcp.read_adc(0) > 29:
        # initialize past
        if past == 0:
            past = time.time()
        # get the gaps
        assignGap(gaps, past)
        print (gaps)
        past = time.time()
        #gaps[0 + getProperGap(gaps)] = time.time() - past
        print('knock')
        print(value)
        while mcp.read_adc(0) > 5:
            #print('wait')
            pass
    # Pause for half a second.
