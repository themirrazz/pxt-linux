namespace linux {
    //% block="in simulator"
    export function inMicroBitSimulator() {
        return inSimulator()
    }
    //% shim=linux::inSimulator
    function inSimulator() {
        return true
    }
}