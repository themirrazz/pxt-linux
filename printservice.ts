// Add your code here


enum PrinterConnectionType {
    Fax,
    Ethernet,
    WirelessLan,
    Simulator,
    BluetoothPrinter,
    USBUart,
    HighSpeedSerialPort,
    Unknown
}

enum PrintStatus {
    Success,
    PrintingPage,
    OutOfInk,
    OutOfPaper,
    Awaiting,
    InternalFailure,
    UserActionRequired,
    LowInk,
    LowPaper
}

enum PrintingColorMode {
    //% block="black and white"
    BlackAndWhite,
    //% block="full color"
    Color
}

enum PageSize {
    Letter8x5
}



class Printer {
    name:string;
    friendlyName:string;
    connectionType:PrinterConnectionType;
    connectable:boolean;
    printableSizes:PageSize[];
    eventHandlers:any[];
    serialNumber:string|number;
    colorMode:PrintingColorMode;
    doublesideable:boolean;
    faxable:boolean
    constructor(
        name: string,
        friendlyName: string,
        connectionType:PrinterConnectionType,
        emitter:(emit:(...args:any[])=>any)=>void,
        printExecutor:(...args:any[])=>void,
        serialNumber:string|number,
        isConnectable:boolean=true,
        colorMode:PrintingColorMode=PrintingColorMode.Color,
        supportsDoubleSiding:boolean=false,
        canSendFax:boolean=false
    ) {
        this.name=name
        this.friendlyName=friendlyName
        this.connectionType=connectionType
        this.serialNumber=serialNumber
        this.connectable=isConnectable
        this.colorMode=colorMode
        this.doublesideable=supportsDoubleSiding
        this.faxable=canSendFax
        this.onprint=printExecutor
        let mySelf:Printer=this
        emitter(
            function (eventName: string) {
                mySelf.emit(eventName)
            }
        )
    }
    onprint:(...args:any[])=>any;
    addListener(eventName:string,callback:(...args:any[])=>any) {
        this.eventHandlers.push({
            eventName:eventName,
            eventHandler:callback
        })
    }
    print(printData:any) {
        let mySelf=this
        this.onprint(
            printData,
            function (eventName: string) {
                mySelf.emit(eventName)
            }
        )
    }
    emit(name:string) {
        for(let i=0;i<this.eventHandlers.length;i++) {
            if (this.eventHandlers[i].eventType==name) {
                this.eventHandlers[i].eventHandler()
            }
        }
    }
}

//% block="VirtualPrint" icon="\uf02f" color=#be96f2
namespace vprint {
    let printers:Printer[] = [];
    //% block="create printer called %n friendly name %f serial number %s color mode %c double-siding supported %ds faxable %fx connectable %ic connection type %ct"
    export function createPrinter(
        n:string,
        f:string,
        s:string,
        ct:PrinterConnectionType,
        ds:boolean,
        fx:boolean,
        ic:boolean,
        c: PrintingColorMode,
    ) {
        let op=function(){
            // placeholder function
        }
        let ee=function(){}
        let thePrinter= new Printer(
            n,f,ct,ee,op,s,ic,c,ds,fx
        )
        printers.push(thePrinter)
    }
    //% block="get array of printers"
    export function allPrinters() {
        return printers
    }
}

