let n = -234;

let count = 0;

n = Math.abs(n); // Case where the n is -ve number

if (n === 0) {
    count = 1;
}

while (n > 0) {
    n = Math.floor(n/10)
    count++
}

console.log(count);