Array.prototype.myMap = function (cb) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(cb(this[i], i, this));
    }

    return newArray;
}

const doubles = [1,2,3,4].myMap((item) =>  item * 2);

console.log(doubles);