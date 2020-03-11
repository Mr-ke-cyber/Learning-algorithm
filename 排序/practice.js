let insertSort = function (array) {
    let len = array.length;
    for (let i = 1; i < len; i++) {
        let target = i;
        for (let j = i - 1; j >= 0; j--) {
            if (array[j] > array[target]) {
                [array[j], array[target]] = [array[target], array[j]];
                target = j;
            } else {
                break;
            }
        }
    }
    return array;
};
let result = insertSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);