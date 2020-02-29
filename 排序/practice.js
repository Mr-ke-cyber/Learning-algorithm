var bubbleSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[i]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
};
/*优化解法*/
var bubbleSort2 = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let complete = true;
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                complete = false;
            }
        }
        if (complete) break;
    }
    return array;
};
let result = bubbleSort2([1, 2, 4, 6, 9, 1, 8]);
console.log(result);