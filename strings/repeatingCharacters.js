const repeatingCharacters = (str) => {
    const map = [...str].reduce((acc, val) => {
        acc[val] = !acc[val] ? 1 : ++acc[val]
        return acc
    }, {});

    return Object.fromEntries(Object.entries(map).filter(([_, count]) =>  count > 1))
}

console.log(repeatingCharacters("nuthan mithra"))
