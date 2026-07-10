const reverseIntger = (n) => {
    const nCopy = n;

    let num = Math.abs(n); // handles negative number
    let rev = 0;
    while (num > 0) {
        rem = num % 10;
        rev = (10 * rev) + rem;
        num = Math.floor(num/10)
    }

    // Handle signed integer range below
    const limit = Math.pow(2,31);

    if (rev < -limit || rev > limit)
        return 0
    return nCopy < 0 ? -rev : rev;
}

console.log(reverseIntger(122342354));
console.log(reverseIntger(-72384));