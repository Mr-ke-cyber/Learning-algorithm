let quickSort = function (Array) {
    let len = Array.length;
    if (len < 2) return Array;
    let left = [];
    let right = [];
    let target = Array[0];
    for (let i = 1; i < len; i++) {
        if (Array[i] > target) {
            right.push(Array[i]);
        } else {
            left.push(Array[i]);
        }
    }
    return quickSort(left).concat(target, quickSort(right));
};
let result = quickSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8]);
console.log(result);