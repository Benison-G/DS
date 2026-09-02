function Fedex () {
    this.calculate = (package) => {
        return 200
    }
}

function DTDC () {
    this.calculate = (package) => {
        return 100;
    }
}

function PFCourier () {
    this.calculate = (package) => {
        return 150;
    }
}

const fedex = new Fedex();
const dtdc = new DTDC();
const courier = new PFCourier();

function Shipping () {
    this.company = "";
    this.setStrategy = function (company) {
        this.company =  company;
    };
    this.calculate = function () {
        return this.company.calculate()
    }
}

const shipping = new Shipping();

const package = { item: "Laptop", weight: "200gm" };

shipping.setStrategy(fedex);
console.log(shipping.calculate());

shipping.setStrategy(dtdc);
console.log(shipping.calculate());

shipping.setStrategy(courier);
console.log(shipping.calculate());