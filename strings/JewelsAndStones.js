// jewels = "aA" stones = "aaAbbs" should return 3

const jewelsAndStones = (jewels, stones) => {
    let jewelSet = new Set();
    let count = 0;

    for(let i = 0; i < jewels.length; i++) {
        jewelSet.add(jewels[i])
    }

    for(let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) count++
    }
    return count;
}

console.log(jewelsAndStones("aA", "aaAbbs"))