var selectionSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
};
let result = selectionSort([1, 2, 4, 6, 9, 1, 8]);
console.log(result);