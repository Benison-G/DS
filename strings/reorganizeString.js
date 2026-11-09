const reorganizeString = (s) => {
    let maxFreq = 0;
    let freq = {};

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1
        maxFreq = Math.max(maxFreq, freq[char])
    }
    const n = s.length;

    if (maxFreq > Math.ceil(n / 2)) return "";

    const chars = Object.keys(freq).sort((a,b) => freq[b] - freq[a]);

    let res = new Array(n);

    let i = 0;
    for (let ch of chars) {
        let count = freq[ch];

        while (count > 0) {
            if (i >= n) {
                i = 1
            }

            res[i] = ch
            --count;
            i += 2
        }
    }

    return res.join("")
}

console.log(reorganizeString("aab"))