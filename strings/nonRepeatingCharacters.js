const nonRepeatingCharacters = (str) => {
    const map = [...str].reduce((acc, val) => {
        
        acc[val] = !acc[val] ? 1 : ++acc[val];
        return acc
    }, {});

    return [...str].find(val => map[val] == 1);
}

console.log(nonRepeatingCharacters("swiss"))
