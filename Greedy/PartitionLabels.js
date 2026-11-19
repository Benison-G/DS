// # Divide the string into partition such that, no character occurs
// # in more than 1 partition and return the length of each partition 
// # in an array

const partitionLabels = (s) => {
    let ans = [];
    let last = {};

    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i
    }

    let start = end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]])

        if (i === end) {
            ans.push(end - start + 1);
            start = end + 1
        }
    }

    return ans;
}


let s = "ababcbacadefegdehijhklij"

console.log(partitionLabels(s))