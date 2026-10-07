const moveZeroesToEnd = (arr) => {
    let x = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[x];
            arr[x] = arr[i];
            arr[i] = temp;
            
            x++;
        }
    }

    return arr;
}

console.log(moveZeroesToEnd([0,1,0,3,12]))