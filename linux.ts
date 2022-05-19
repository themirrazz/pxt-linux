//% icon="\uf120" color=#a72fcc
namespace linux {
    //% block="in simulator"
    export function inMicroBitSimulator() {
        return inSimulator()
    }
    //% block="battery voltage"
    export function getBattVolts(){
        return battery()
    }
    //% block="battery level"
    export function getBattLevel(){
        return (getBattVolts()/3.11)*100
    }
    //% shim=linux::inSimulator
    function inSimulator() {
        return true
    }
    //% shim=linux::battery
    function battery() {
        return 3.11
    }
}