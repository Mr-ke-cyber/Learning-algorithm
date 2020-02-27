var quickSort = function (array) {
    let len = array.length;
    if (len < 2) return array;
    let left = [];
    let right = [];
    let target = array[0];
    for (let i = 1; i < len; i++) {
        if (array[i] < target) {
            left.push(array[i]);
        } else {
            right .push(array[i]);
        }
    }
    return quickSort(left).concat(target, quickSort(right));
};
let result = quickSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);