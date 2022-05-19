// Add your code here

class CreditCard {
    debit:boolean;
    id:number;
    constructor(isDebit:boolean,cardNumber:number) {
        this.debit=isDebit
        this.id=cardNumber
    }
}


//% block="Card Swipe" icon="\uf09d" color=#d199c3
namespace cardswipe {
    //% block="charge $money dollars to $thecard"
    export function chargeUsDollars(money:number,thecard:CreditCard,isDebit:boolean=false) {
        let card=thecard.id
        if(isDebit) {
            chargeUsDollarsDebit(money,card)
        } else {
            chargeUsDollarsCredit(money, card)
        }
    }
    //% block="when card swiped"
    export function onCardSwiped(
        handler: (card:CreditCard) => void
    ) {
        // todo
    }
    function chargeUsDollarsCredit(amount: number, card: number) {
        // to-do
    }
    function chargeUsDollarsDebit(amount: number, card: number) {
        // to-do
    }
}