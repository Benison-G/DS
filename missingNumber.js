const missingNumber = (nums) => {
    const n = nums.length;

    let totalSum = n * (n + 1) / 2;

    let partialSum = 0;
    for (let i = 0; i < nums.length; i++) {
        partialSum = partialSum + nums[i]
    }

    return totalSum - partialSum;
}

console.log(missingNumber([4,0,3,5,1]))
console.log(missingNumber([0, 1]))