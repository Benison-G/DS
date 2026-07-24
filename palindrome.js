const isPalindrome = (n) => {
    let copyN = n;

    let reverse = 0;

    while(n > 0) {
        let remainder = n % 10;
        reverse = (10 * reverse) + remainder;
        n = Math.floor(n / 10);
    }

    return copyN === reverse;
}

console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(1231));
console.log(isPalindrome(-121));