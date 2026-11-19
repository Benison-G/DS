/**
 * Formula generation
 * 
 * AAAAACCBCB n = 2
 * 
 * intercal will be:
 * A C B A C B A C _ A _ _ A
 * 
 * cycle = A C B => n + 1
 * maxFreq occuring is A i.e 5 times
 * cycles ACB ACB AC_ A_ _  + extra A (Maximum occuring char - 
 * there may be multiple chars )
 * 
 * so formula is (n + 1) * (maxFreq - 1) + chars count with same max freq
 * 
 */

const leastIntervals = (tasks, n) => {
    let map = {};
    let maxFreq = 0;
    let charsWithMaxFreq = 0;

    for (let i = 0; i < tasks.length; i++) {
        let freq = map[tasks[i]] = (map[tasks[i]] || 0) + 1
        if (freq >  maxFreq) {
            maxFreq = freq;
            charsWithMaxFreq = 1
        } else if (freq == maxFreq) {
            ++charsWithMaxFreq
        }
    }

    const cycles = (n + 1) * (maxFreq - 1) + charsWithMaxFreq;
    // case of max, handles above scenario failing at case of n = 1

    return Math.max(tasks.length, cycles);
}

let arr = ["A","A","A","B","B","B"];
let n = 2

console.log(leastIntervals(arr, n))
