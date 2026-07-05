Array.prototype.myFilter = function (cb) {
    const newArray = [];

    for(let i = 0; i< this.length; i++) {
        if (cb(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const filteredArray = [1,5,2,3,7,89,0].myFilter((item) => item % 2 !== 0);

console.log(filteredArray);