// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
// 示例：
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]
// 提示：
// 0 <= len(arr) <= 100000
// 0 <= k <= min(100000, len(arr))
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    arr = arr.sort((a, b) => a - b);
    return arr.slice(0, k);
};
/*方法二：插入排序*/
var smallestK2 = function (arr, k) {
    if (k === 0) return [];
    let mergeSort = function (array) {
        if (array.length < 2) {
            return array;
        }
        let mid = Math.floor(array.length / 2);
        let front = array.slice(0, mid);
        let end = array.slice(mid);
        return merge(mergeSort(front),mergeSort(end));
    };
    let merge = function (front, end) {
        const temp = [];
        while (front.length && end.length) {
            if (front[0] < end[0]) {
                temp.push(front.shift());
            } else {
                temp.push(end.shift());
            }
        }
        while (front.length) {
            temp.push(front.shift());
        }
        while (end.length) {
            temp.push(end.shift());
        }
        return temp;
    };
    arr = mergeSort(arr);
    return arr.slice(0, k);
};
let result = smallestK2([1,3,5,7,2,4,6,8], 4);
console.log(result);


