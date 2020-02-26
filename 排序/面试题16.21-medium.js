// 给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。
// 返回一个数组，第一个元素是第一个数组中要交换的元素，第二个元素是第二个数组中要交换的元素。若有多个答案，返回任意一个均可。若无满足条件的数值，返回空数组。
// 示例:
//     输入: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
// 输出: [1, 3]
// 示例:
//     输入: array1 = [1, 2, 3], array2 = [4, 5, 6]
// 输出: []
// 提示：
// 1 <= array1.length, array2.length <= 100000
/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
var findSwapValues = function(array1, array2) {
    let map2 = new Map();
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        sum1 += array1[i] ? array1[i] : 0;
        sum2 += array2[i] ? array2[i] : 0;
        map2.set(array2[i], true);
    }
    let diff = sum1 - sum2;
    diff /= 2;
    for (let i = 0; i < array1.length; i++) {
        let target = array1[i] - diff;
        if (map2.has(target)) {
            return [array1[i], target];
        }
    }
    return [];
};
let result = findSwapValues([1,2,3], [4,5,6]);
console.log(result);