// Example 1:

// Input: s = "())"
// Output: 1
// Example 2:

// Input: s = "((("
// Output: 3
 
const minAddToMakeValid = (s) => {
    let openCount = closeCount = 0;

    for (let char of s) {
        if (char === "(") {
            openCount++
        } else {
            if (openCount == 0) {
                closeCount++
            } else {
                --openCount
            }
        }
    }

    return openCount + closeCount
}

console.log(minAddToMakeValid("((()"))