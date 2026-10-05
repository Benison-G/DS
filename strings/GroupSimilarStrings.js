/**
 * input = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * output:
 * [
 *     ["eat", "tea", "ate"],
 *     ["tan", "nat"],
 *     ["bat"]
 * ]
 */

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

let map = {};
for (let i = 0; i < input.length; i++) {
    let key = input[i].split("").sort().join("");

    if (!map[key]) {
        map[key] = [input[i]]
    } else {
        map[key].push(input[i])
    }
}

console.log(Object.values(map))