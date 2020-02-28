// 给定一个整数数组，编写一个函数，找出索引m和n，只要将索引区间[m,n]的元素排好序，整个数组就是有序的。注意：n-m尽量最小，也就是说，找出符合条件的最短序列。函数返回值为[m,n]，若不存在这样的m和n（例如整个数组是有序的），请返回[-1,-1]。
// 示例：
// 输入： [1,2,4,7,10,11,7,12,6,7,16,18,19]
// 输出： [3,9]
// 提示：
// 0 <= len(array) <= 1000000
/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
    let len = array.length;
    if (len < 2) return [-1, -1];
    let temp = [].concat(array);
    array.sort((a, b) => a - b);   // 此处只需要考虑一种情况（升序或者降序即可）因为不论升序还是降序索引区间[m,n]之间的距离是不变的）
    let l = 0;
    let r = len - 1;
    while (l < r) {
        let flag = false;
        if (temp[l] === array[l]) {
            l++;
        } else {
            flag = true;
        }
        if (temp[r] === array[r]) {
            r--;
        } else if (flag) {
            break;
        }
    }
    if (l === r) return [-1, -1];
    return [l, r];
};
let result = subSort([1, 3, 5,7,9]);
console.log(result);