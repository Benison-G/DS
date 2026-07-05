Array.prototype.myReduce = function (cb, initialValue) {
    var acc = initialValue;
    for(let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}

const sum = [1,2,3,4,5].myReduce((acc, item) => {
    return acc + item;
}, 0);

console.log(sum);