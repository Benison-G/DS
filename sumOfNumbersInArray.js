const sum = (nums) => {
    if (nums.length === 0) return 0;

    return nums[0] + sum(nums.slice(1));
} 

console.log(sum([4,2, 10,3,7,1]));