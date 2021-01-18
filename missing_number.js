function returnMissingNumbers(arr) {
    let missingNumbers = [];
    for(let i=0; i< arr.length-1; i++) {
        if(arr[i]+1 != arr[i+1]) {
            missingNumbers.push(arr[i] + 1);
        }
    }
    return missingNumbers;
}

console.log(returnMissingNumbers([1,2, 4, 5, 7, 8, 9]));
