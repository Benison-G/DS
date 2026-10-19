const arr = [1, 2, 3, 4, 5];

let prefixProd = 1;
let newArray = [];

for (let i = 0; i < arr.length; i++) {
    newArray[i] = prefixProd;
    prefixProd *= arr[i]
}

let suffixProd = 1;

for (let i = arr.length - 1; i >= 0; i--) {
    newArray[i] *= suffixProd;
    suffixProd *= arr[i]
}

console.log(newArray)
