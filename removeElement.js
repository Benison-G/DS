// consider an array of integers, remove the passed in value occurance and keep other elements in order and return count of remaining.

const removeElement = (a, val) => {
    let x = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== val) {
            a[x] = a[i];
            x = x + 1;
        }
    }
console.log(a)
    return x;
}
 
console.log(removeElement([3,2,1,5,3,4,8,3], 3));