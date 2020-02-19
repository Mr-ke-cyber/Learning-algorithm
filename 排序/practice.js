let selectionSort = function (Array) {
    let len = Array.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (Array[j] < Array[i]) {
                minIndex = j;
            }
        }
        [Array[minIndex], Array[i]] = [Array[i], Array[minIndex]];
    }
    return Array;
};
let result = selectionSort([1,22,5,2,6,9,2,333]);
console.log(result);