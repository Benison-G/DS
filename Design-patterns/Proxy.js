/**
 * Proxy design pattern, where we can have a placeholder object as a middleman between the 
 * client and the target object. It allows you to intercept before reaching the target object, 
 * modify, enhance them and pass them on.
 * 
 * used to controll the access, caching and provide simplified interface for a complex  object
 * 
 */

function CryptoCurrency () {
    this.getValue = function (coin) {
        console.log("Calling API...");

        switch(coin) {
            case "Bitcoin": 
                return 1000;
            case "Etherium":
                return 500;
            case "Dodge":
                return 200;
            case "CoinBase":
                return 450;        
            default:
                return 100;
        }
    }
}

function CryptoCurrencyProxy () {
    this.api = new CryptoCurrency();
    this.cache = {};

    this.getValue = function (coin) {
        if(!this.cache[coin]) {
            this.cache[coin] = this.api.getValue(coin)
        }
        return this.cache[coin];
    }
}


// const crypto = new CryptoCurrency();
// console.log(crypto.getValue("Bitcoin"));
// console.log(crypto.getValue("Etherium"));
// console.log(crypto.getValue("CoinBase"));
// console.log(crypto.getValue("Dodge"));
// console.log(crypto.getValue("some other"));

// Above calls API everytime it invokes, but Proxy helps us to control the object and cache

const crypto = new CryptoCurrencyProxy();
console.log(crypto.getValue("Bitcoin"));
console.log(crypto.getValue("Etherium"));
console.log(crypto.getValue("CoinBase"));
console.log(crypto.getValue("Dodge"));
console.log(crypto.getValue("some other"));
console.log(crypto.getValue("Bitcoin"));
console.log(crypto.getValue("Bitcoin"));
console.log(crypto.getValue("Bitcoin"));
console.log(crypto.getValue("Bitcoin"));
console.log(crypto.getValue("Bitcoin"));
