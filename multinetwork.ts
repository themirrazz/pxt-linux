

enum WLANSecurity {
    LEAP,
    PEAP,
    WEP,
    PSK,
    None
}

class WLANNetwork {
    constructor(ssid: string, security: WLANSecurity, connect: (...args: any[])=>any) {
        this.NetWorkSsid=ssid,
        this.SecurityLevel=security,
        this.selfconnect=connect
    }
    SecurityLevel:WLANSecurity
    NetWorkSsid:string
    selfconnect:(...args:any[])=>any
}


//% block="WLAN" icon="\uf1eb" color=#09cbed
namespace wifi {
    //% block="found networks"
    export function foundNetworks() {
        let fn= [
            new WLANNetwork(
                "Simu-fi",
                WLANSecurity.PSK,
                function(password:string){
                    if (password == "iam" + control.deviceName()) {
                        return true
                    } else {
                        return false
                    }
                }
            )
        ]
        if (hostingHotspot) {
            fn.push(hotspot)
        }
        return fn
    }
    export let isConnected:boolean=false
    let network:WLANNetwork;
    //% block="connect to %wlan with %s user %u password %p"
    //% inlineInputMode=external
    export function connect(
        wlan: WLANNetwork, s: WLANSecurity = WLANSecurity.None,u:string,p:string
    ) {
        if (s == WLANSecurity.None) {
            if (wlan.selfconnect()) {
                isConnected = true
                network = wlan
            }
        }
        if (s == WLANSecurity.PSK) {
            if (wlan.selfconnect(p)) {
                isConnected = true
                network = wlan
            }
        }
        if (s == WLANSecurity.WEP) {
            if (wlan.selfconnect(p)) {
                isConnected = true
                network = wlan
            }
        }
        if (s == WLANSecurity.LEAP) {
            if (wlan.selfconnect(u, p)) {
                isConnected = true
                network = wlan
            }
        }
        if (s == WLANSecurity.PEAP) {
            if (wlan.selfconnect(u, p)) {
                isConnected = true
                network = wlan
            }
        }
    }
    let hostingHotspot=false
    let hotspot:WLANNetwork
    //% block="create hotspot %name %password"
    export function createHotSpot(name: string = control.deviceName(),password:string){
        if(hostingHotspot){endHostSpot()}
        if(!name){
            name = control.deviceName()+" hotspot"
        }
        if(name==undefined||name==null) {
            name = control.deviceName()+" hotspot"
        }
        hostingHotspot=true
        hotspot=new WLANNetwork(
            name,
            WLANSecurity.PSK,
            function(x) {
                if(x==password){return true}
                return false
            }
        )
    }
    export function endHostSpot() {
        hotspot=undefined
        hostingHotspot=false
    }
}


//% block="Bluetooth" icon="\uf293" color=#021afd
namespace bluetooth5 {
    //% block="turn bluetooth%flip"
    export function setBluetoothEnabled(flip:ToggleSwitch){}
}

enum ToggleSwitch {
    On,Off
}


