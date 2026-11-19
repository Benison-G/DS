const overlappingIntervalsCount = (intervals) => {
    let count = 0;
    let lastIntervalEnd = -Infinity;

    for (let [start, end] of intervals) {
        if (start < lastIntervalEnd) {
            ++count
        } else {
            lastIntervalEnd = end
        }
    }

    return count
}

console.log(overlappingIntervalsCount([[1,2],[2,3],[3,4],[1,3]])) // 1
console.log(overlappingIntervalsCount([[1,2],[1,2],[1,2]])) // 2