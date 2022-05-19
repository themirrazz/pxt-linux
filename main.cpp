#include "pxt.h"
#include "MicroBit.h"
 
MicroBitDisplay display;

using namespace pxt;


namespace linux {
    //%
    bool inSimulator() {
        return false;
    }
}