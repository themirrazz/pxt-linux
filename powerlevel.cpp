#include "MicroBit.h"
 
MicroBitDisplay display;
 
/*
* This is a simple program that let us use the ADC to read the input voltage.
* - thanks Marcelo: https://os.mbed.com/users/MarceloSalazar/notebook/measuring-battery-voltage-with-nordic-nrf51x/
*/
 
 
void vdd_analogin_init(void)
{
    NRF_ADC->ENABLE = ADC_ENABLE_ENABLE_Enabled;
    NRF_ADC->CONFIG = (ADC_CONFIG_RES_10bit << ADC_CONFIG_RES_Pos) |
                      (ADC_CONFIG_INPSEL_SupplyOneThirdPrescaling << ADC_CONFIG_INPSEL_Pos) |
                      (ADC_CONFIG_REFSEL_VBG << ADC_CONFIG_REFSEL_Pos) |
                      (ADC_CONFIG_PSEL_Disabled << ADC_CONFIG_PSEL_Pos) |
                      (ADC_CONFIG_EXTREFSEL_None << ADC_CONFIG_EXTREFSEL_Pos);
}
 
uint16_t vdd_analogin_read_u16(void)
{
    NRF_ADC->CONFIG     &= ~ADC_CONFIG_PSEL_Msk;
    NRF_ADC->CONFIG     |= ADC_CONFIG_PSEL_Disabled << ADC_CONFIG_PSEL_Pos;
    NRF_ADC->TASKS_START = 1;
    while (((NRF_ADC->BUSY & ADC_BUSY_BUSY_Msk) >> ADC_BUSY_BUSY_Pos) == ADC_BUSY_BUSY_Busy) {};
    return (uint16_t)NRF_ADC->RESULT; // 10 bit
}
 
namespace battery {
  //% block="read battery voltage"
  float readBatteryVolts(){
    float value = (float)vdd_analogin_read_u16();    
    value = (value * 3.6) / 1024.0;
    return value
  }
}
