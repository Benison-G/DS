const bubbleSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSwapped = true;
            }
        }
        // Reduces the unnecessary iterations
        if (!isSwapped) break;
    }
    return arr;
}

console.log(bubbleSort([6,3,7,9,3,4,1,2]))


// Time complexity - O(n^2)
// Space complexity - O(1)