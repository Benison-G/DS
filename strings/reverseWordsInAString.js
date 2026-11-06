const reverseWords = (text) => {
    const str = splitWords(text);

    for (let i = 0; i < Math.floor(str.length/2); i++) {
        let temp = str[i];
        str[i] = str[str.length - i - 1];
        str[str.length - i - 1] = temp
    }

    return str.join(" ")
}

const splitWords = (text) => {
    const words = [];
    let word = "";

    for (let char of text) {
        if (char === " ") {
            if (word !== "") {
                words.push(word);
                word = ""
            }
        } else {
            word += char
        }

    }

    // Last word 
    if (word !== "") {
        words.push(word)
    }

    return words;
}

console.log(reverseWords("  blue  is   sky   the"));