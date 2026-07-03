// add(5)(4)(2)(); should return 1

const add = (a) => {
    return function(b) {
        if (b) return add(a+b);
        return a;
    };
}

console.log(add(5)(4)(2)()); //prints 11
console.log(add(1)(2)(3)(4)(5)()); // prints 15