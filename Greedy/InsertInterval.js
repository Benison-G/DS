const insertInterval = (intervals, newInterval) => {
    let n = intervals.length;

    let res = [];
    let i = 0;

    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        ++i
    }

    while (i <  n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        ++i
    }

    res.push(newInterval)

    while (i < n) {
        res.push(intervals[i]);
        ++i
    }

    return res;
}

console.log(insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))