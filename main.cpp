#include "MicroBit.h"
#include "pxt.h"

using namespace pxt

//% color=#E3008C weight=96 icon="\uf012"
namespace linux {
    //% blockId=linuxBlock block="linux block"
    //% weight=100
    void linuxBlock() {
        uBit.display.scroll("this is a linux block")
    }
}