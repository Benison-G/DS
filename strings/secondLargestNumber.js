const secondLargest = (s) => {
    let first = -Infinity;
    let second = -Infinity;

    for (let char of s) {
        let num = Number(char);

        if (num > first) {
            second = first;
            first = num
        } else if (num > second && num !== first) {
            second = num
        }
    }

    return second === -Infinity ? -1 : second;
}

console.log(secondLargest("asd123nkjj4xdj9ksdjfh0s6skdjf"))