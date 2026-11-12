/**
 * A company is planning to interview 2n people. 
 * Given the array costs where costs[i] = [aCosti, bCosti], 
 * the cost of flying the ith person to city a is aCosti, 
 * and the cost of flying the ith person to city b is bCosti.

    Return the minimum cost to fly every person to a city 
    such that exactly n people arrive in each city.

    // Sort descending with the difference of B - A.
    // add first half as A and second half as B
*/
 

const twoCitySched = (costs) => {
    costs.sort((a, b) => {
        return (b[1] - b[0]) - (a[1] - a[0])
    })

    let ans = 0;
    let n = costs.length / 2;
    for (let i = 0; i < n; i++) {
        ans = ans + costs[i][0];
        ans = ans + costs[i + n][1]
    }

    return ans
}

costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]

console.log(twoCitySched(costs))