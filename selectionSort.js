const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        // Dont swap if minimum and the i are same.
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }

    return arr;
}

console.log(selectionSort([5,12,7,3,9,3,5]));

// Time complexity - O(n^2)
// Space complexity - O(1)