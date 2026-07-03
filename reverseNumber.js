const reverseNumber = (argu) => {
    let n = argu;
    rev = 0;
    while (n > 0) {
        rem = n % 10;
        rev = (10 * rev) + rem;
        n = Math.floor(n / 10)
    }

    return rev;
}

console.log(reverseNumber(1234));