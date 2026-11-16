// Max profit for all the days

const bestTimeToBuyStock = (prices) => {
    let max = 0;

    for (let i = 1; i <= prices.length; i++) {
        let profit = prices[i] - prices[i - 1];

        if (profit > 0) {
            max += profit
        }
    }

    return max
}

console.log(bestTimeToBuyStock([7, 1, 5, 3, 6, 4]))