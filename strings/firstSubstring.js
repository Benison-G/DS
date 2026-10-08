/**
 * This is solved via sliding window algorithm with 3 pointers
 */

const firstSubString = (str, substr) => {
    let n = str.length;
    let m = substr.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        for (j = 0; j < m; j++) {
            if (str[i + j] !== substr[j]) {
                break;
            }
        }

        if (j === m) {
            return i
        }
    }

    return -1
}

console.log(firstSubString("dadbutsad", "sad"));
