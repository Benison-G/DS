const largestOdd = (num) => {
    for (let i = num.length - 1; i >= 0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            return num.substring(0, i+1)
        }
    }
}

console.log(largestOdd("3214"));