const arr = [9, 4,2, 10,3,7,1]

const sumOfOddNumbers = (n) => {
    const isOdd = arr[n] % 2 !== 0;

    if (n === 0) return isOdd ? arr[n] : 0;
    
    return (isOdd ? arr[n] : 0) + sumOfOddNumbers(n - 1);
}
console.log(sumOfOddNumbers(arr.length - 1));;