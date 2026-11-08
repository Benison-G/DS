const DecodeString = (s) => {
    let i = 0;

    const decode = () => {
        let res = "";
        let num = 0;

        while (i < s.length) {
            let char = s[i];
            if (!isNaN(char)) {
                num = num * 10 + parseInt(char);
                ++i
            } else if (char == "[") {
                ++i;
                const str = decode();
                res = res + str.repeat(num)
                num = 0;
            } else if (char == "]") {
                ++i;
                return res;
            } else {
                ++i;
                res += char
            }
        }
        return res;
    }

    return decode();
}

console.log(DecodeString("3[a2[b]c]"))