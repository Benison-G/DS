// Find the length of the last word in a string
// Should ignore the spaces, 
// (specifically handles a case where there is space to the edges of string)

const lengthOfTheLastWord = (s) => {
    let n = s.length - 1;
    let count = 0;

    while (n >= 0) {
        if (s[n] !== " ") {
            count++
        } else if (count > 0 && s[n] === " ") {
            break;
        }
        --n
    }

    return count;
}