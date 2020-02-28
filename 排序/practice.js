let mergeSort = function (array) {
    let len = array.length;
    if (len < 2) return array;
    let mid = len >> 1;
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};
let merge = function (left, right) {
    let temp = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            temp.push(left.shift());
        } else {
            temp.push(right.shift());
        }
    }
    while (left.length) {
        temp.push(left.shift());
    }
    while (right.length) {
        temp.push(right.shift());
    }
    return temp;
};
let result = mergeSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);