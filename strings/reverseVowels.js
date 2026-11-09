const reverseVowels = (s) => {
    const str = [...s];
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    let left = 0;
    let right = str.length - 1;

    while (left <= right) {
        if (vowels.has(str[left]) && vowels.has(str[right])) {
            [str[left], str[right]] = [str[right], str[left]];
            right--;
            left++
        } else {
            if (!vowels.has(str[left])) {
                left++
            } else if (!vowels.has(str[right])) {
                right--
            }
        }
    }

    return str.join("")
}

console.log(reverseVowels("hello"));