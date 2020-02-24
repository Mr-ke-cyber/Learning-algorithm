var selectSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        [array[i], array[maxIndex]] = [array[maxIndex], array[i]];
    }
    return array;
};
let result = selectSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);