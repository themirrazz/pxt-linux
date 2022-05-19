//% block="Linux" icon="\uf120" color=#a053b8
namespace linux {
    //% block="what the bruh?"
    export function whatTheBruh() {
        return bruh()
    }
    //% shim=linux::bruh
    function bruh() {
        return "fake-bruh"
    }
}