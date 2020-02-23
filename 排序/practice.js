var bubbleSort = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
};
var bubbleSort2 = function (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        let complete = true;
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                complete = false;
            }
        }
        if (complete) break;
    }
    return array;
};
let result = bubbleSort2([3,1,5,9,2,1,0]);
console.log(result);