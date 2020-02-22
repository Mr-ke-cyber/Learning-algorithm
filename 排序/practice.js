var mergeSort = function (array) {
    let len = array.length;
    if (len < 2) return array;
    let mid = len >> 1;
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};
const merge = function (left, right) {
  const temp = [];
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
let result = mergeSort([1,9,3,8,0,23,5]);
console.log(result);