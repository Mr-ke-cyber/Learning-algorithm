let quickSort = function (array) {
    let len = array.length;
    if (len < 2) return array;
    let t = array[0], left = [], right = [];
    for (let i = 1; i < len; i++) {
        if (array[i] > t) {
            right.push(array[i]);
        } else {
            left.push(array[i]);
        }
    }
    return quickSort(left).concat(t, quickSort(right));
};
let result = quickSort([1, 3, 1, 4, 6, 9, 2, 8]);
console.log(result);