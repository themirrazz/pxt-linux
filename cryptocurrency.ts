// Add your code here


//% block="Crypto" icon="\uf15a" color=#f502d9
namespace cryptocurrency {
    //% block="US$ of %int bitcoin"
    export function bitcoinToDollars(int:number) {
        return int * 30090.1
    }
}