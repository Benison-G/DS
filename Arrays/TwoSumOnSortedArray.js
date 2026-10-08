/**
 * Find the two sum, Given that the array is sorted, solve with constant space complexity
 */

const twoSum = (arr, target) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        let sum = arr[i] + arr[j];
        if (sum > target) {
            --j
        } else if (sum < target) {
            ++i
        } else {
            return [i+1, j+1]
        }
    }
}

console.log(twoSum([0, 2, 7, 11, 15], 9))
