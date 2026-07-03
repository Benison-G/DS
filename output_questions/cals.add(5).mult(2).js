const calc = {
    total: 0,
    add: function (n) {
        this.total += n;
        return this;
    },
        multiply: function (n) {
        this.total *= n;
        return this;
    },
        substract: function (n) {
        this.total -= n;
        return this;
    }
}

const result = calc.add(5).multiply(4).substract(2).add(1);

console.log(result.total);