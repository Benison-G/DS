const arr = [1,4,8,2]
const sum = 6;

const twoSum = () => {
    let seen = new Map();

    for (let i = 0; i < arr.length; i++) {
        let diff = sum - arr[i];

        if (seen.has(diff)) {
            return [seen.get(diff), i]
        } 

        seen.set(arr[i], i)
    }

    return []
}

console.log(twoSum())