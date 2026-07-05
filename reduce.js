const arr = [1,2,3,4,5];

const sum = arr.reduce((acc, cur, i, arr) => {
    return acc + cur;
})

console.log(sum);