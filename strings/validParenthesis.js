// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3
 
const minAddToMakeValid = (s) => {
    const openCount = closeCount = 0;

    for (let item of s) {
        if (item =="(") {
            ++openCount
        } else {
            if (openCount == 0) {
                ++closeCount
            } else {
                --openCount
            }
        }
    }

    return openCount + closeCount;
}