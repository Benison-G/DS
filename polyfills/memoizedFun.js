function memoizedFun (fn, context) {
    let res = {}
    return function (...args) {
        const argscache = JSON.stringify(args);
        if (!res?.[argscache]) {
            res[argscache] = fn.call(context || this, ...args);
        }
        return res[argscache];
    }
};

const clumsyProduct = (n1, n2) => {
    for(let i = 0; i < 10000000; i++) {}
    return n1 * n2;
}

const memoizedFunction = memoizedFun(clumsyProduct);

console.time("First call");
console.log(memoizedFunction(10,20));
console.timeEnd("First call");

console.time("Second call");
console.log(memoizedFunction(10,20));
console.timeEnd("Second call");