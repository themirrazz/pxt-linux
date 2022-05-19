// Add your code here




//% icon="\uf0ea" color=#34749e
namespace clipboard {
    let clipboard:any[]=[]
    //% block="copy text %text to clipboard"
    export function copyText(text:string){
        clipboard.push({
            type:"raw/text",
            copiedText:text,
            textLength:text.length
        })
    }
    //% block="copy led image %img to clipboard"
    export function copyLedImage(img:Image) {
        clipboard.push({
            type:"image/led",
            imageItem:img
        })
    }
    //% block="copy boolean %bool to clipboard"
    export function copyBoolean(bool:boolean) {
        clipboard.push({
            type:"raw/boolean",
            booleanValue: bool ? 1 : 0
        })
    }

    //% block="purge clipboard"
    export function purge() {
        clipboard.forEach(function(){
            clipboard.pop()
        })
    }
}