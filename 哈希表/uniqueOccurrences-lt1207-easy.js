// 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
// 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
//
// 示例 1：
//
// 输入：arr = [1,2,2,1,1,3]
// 输出：true
// 解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
// 示例 2：
//
// 输入：arr = [1,2]
// 输出：false
// 示例 3：
//
// 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
// 输出：true
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();
    let set = new Set();
    let i = 0;
    while (i < arr.length) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
        i++;
    }
    for(let value of map.values()) {
        if (set.has(value)) {
            return false;
        } else {
            set.add(value);
        }
    }
    return true;
};
