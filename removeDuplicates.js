const removeDuplicates = (a) => {
    let x = 0;

    for(let i = 0; i < a.length; i++) {
        if (a[i] > a[x]) {
            x = x + 1;
            a[x] = a[i];
        }
    }

    return x + 1;
}

// returns unique elements from a non decreasing ordered array, 

console.log(removeDuplicates([0,0,1,1,1,3,3,4,4]));