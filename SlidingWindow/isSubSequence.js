const isSubSequence = (s, t) => {
    let i = j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            ++i;
        }
        ++j;
    }

    return i === s.length;
}

console.log(isSubSequence("ace", "abcde"))
console.log(isSubSequence("acb", "abcde"))
