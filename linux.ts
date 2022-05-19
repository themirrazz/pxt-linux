namespace linux {
    //% block="in simulator"
    export function inMicroBitSimulator() {
        return inSimulator()
    }
    //% block="battery voltage"
    export function getBattVolts(){
        return battery()
    }
    //% block="battery %"
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