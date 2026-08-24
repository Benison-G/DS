// Leet code Reverse String II

// Suppose, "abcdefg" given k, reverse first k characters for every 2k characters
// O/p: (k=2) "bacdfeg" - ba and fe are reversed

const reverseString = (s, k) => {
    // Split the string as Strings are immutable cannot be reversed.

    s = s.split("");

    // Loop through every 2k Characters
    for (let i = 0; i < s.length; i = i + (2 * k)) {
        // Now for each iteration you will get access to k elements
        //Reverse it

        const mid = Math.floor(k/2);
        for (let j = 0; j < mid; j++) {
            // Adding i here, as the swap/reverse should happen 
            // only for k characters, once done, jumb to next 2k sequence
            let temp  = s[i + j];
            s[i + j] = s[i + k - 1 - j];
            s[i + k - 1 - j] = temp;
        }
    }

    return s.join("");
}

console.log(reverseString("abcdefg", 2))