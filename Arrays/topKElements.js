const topKElements = (arr, k) => {
    let copyK = k;
    let temp = [];
    for (let i = arr.length - 1; i > 0 && copyK > 0; i--) {
        temp.push(arr[i]);
        copyK--;
    }

    return temp;
}

console.log(topKElements([1,4,5,7,8,9,3,4,6], 4));