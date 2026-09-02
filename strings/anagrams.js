function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) {
            return false;
        }

        count[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true

console.log(isAnagram("anagram", "nagarami")); // should return false
console.log(isAnagram("anagram", "nagmi")); // should return false
console.log(isAnagram("anagram", "nagaram")); // should return true