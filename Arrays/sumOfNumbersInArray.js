const arr = [4,2, 10,3,7,1]
const sum = (n) => {
    if (n === 0) return arr[n];

    return arr[n] + sum(n - 1);
} 

console.log(sum(arr.length - 1));;