// Add your code here

//% block="ACPI" icon="\uf011" color=#363336
namespace acpi {
    //% block
    export function reboot() {
        control.reset()
    }
    //% block="shut down"
    export function shutDown() {
        // to-do
    }
}