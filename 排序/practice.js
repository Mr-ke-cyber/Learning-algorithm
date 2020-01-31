//练习本专题下的算法题
function mergeSort(array) {
    if (array.length < 2) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    let temp = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            temp.push(left.shift())
        } else {
            temp.push(right.shift())
        }
    }
    while (left.length) {
        temp.push(left.shift());
    }
    while (right.length) {
        temp.push(right.shift());
    }
    return array;
}
let result = mergeSort([7, 4, 22, 6, 9, 3, 8]);
console.log(result, 'counta');


