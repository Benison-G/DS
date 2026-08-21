// Find max freq of vowels and consonants and return the sum

const maxFreq = (s) => {
    const map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    let consonantCount = 0;

    const mapKeys = Object.keys(map);
    console.log(mapKeys)
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            vowelCount = Math.max(vowelCount, map[mapKeys[i]])
        } else {
            consonantCount = Math.max(consonantCount, map[mapKeys[i]])
        }
    }

    return vowelCount + consonantCount;
}

console.log(maxFreq("succeess"));