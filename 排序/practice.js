let selectionSort = function (Array) {
    let len = Array.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (Array[j] < Array[minIndex]) {
                minIndex = j;
            }
        }
        [Array[minIndex], Array[i]] = [Array[i], Array[minIndex]];
    }
    return Array;
};
let result = selectionSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);