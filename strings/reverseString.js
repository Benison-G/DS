const reverseString = (str) => {
    const length = str.length;
    const halfLength = Math.floor(str.length / 2);

    for(let i = 0; i < halfLength; i++) {
        let temp = str[i];
        str[i] = str[length-i-1];
        str[length-i-1] = temp;

    }

    return str;
}

console.log(reverseString(["b", "e", "n", "i", "s", "o" , "n"]));