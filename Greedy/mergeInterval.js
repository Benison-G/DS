// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, 
// and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.
// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

const mergeIntervals = (intervals) => {
    /**
     * input array of items - [a, b]
     * steps:
     * sort by a of each array item
     * add 1st item to result
     * check result's b is less than current item's a
     * then add max of result's b and current item's b to res
     * 
     * else just add the current item to result
     */

    intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]]

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= res[res.length - 1][1]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        } else {
            res.push(intervals[i])
        }
    }

    return res
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))