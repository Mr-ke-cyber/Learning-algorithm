// 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。
// 如果可以完成上述分割，则返回 true ；否则，返回 false 。
// 示例 1：
//
// 输入: [1,2,3,3,4,5]
// 输出: True
// 解释:
//     你可以分割出这样两个连续子序列 :
//         1, 2, 3
// 3, 4, 5
//
// 示例 2：
// 输入: [1,2,3,3,4,4,5,5]
// 输出: True
// 解释:
//     你可以分割出这样两个连续子序列 :
//         1, 2, 3, 4, 5
// 3, 4, 5
//
// 示例 3：
//
// 输入: [1,2,3,4,4,5]
// 输出: False
//
// 提示：
// 输入的数组长度范围为 [1, 10000]
/**
 * @param {number[]} nums
 * @return {boolean}
 */
    //此题关键：将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为3。要求每个子序列的长度至少为3，
    // 精妙之处在于发现有重复的数字要立马着手处理掉，是放在前一个序列后面，还是另起一个序列，显然前一个序列后面更合适。
var isPossible = function(nums) {
    let map = new Map();
    for (let num of nums) {
        let v = map.get(num) || 0;
        map.set(num, v + 1);
    }
    let dp = []; // 以dp[i]中的i为结尾的子序列
    let i = 0;
    while (i < nums.length) {
        let curr = nums[i];
        if (map.get(curr) > 0 && dp[curr - 1] > 0) {
            dp[curr - 1]--;
            dp[curr] ? dp[curr]++ : dp[curr] = 1;
            map.set(curr, map.get(curr) - 1);
        } else if (map.get(curr) > 0 && map.get(curr + 1) > 0 && map.get(curr + 2) > 0) {
            dp[curr + 2] ? dp[curr + 2]++ : dp[curr + 2] = 1;
            map.set(curr, map.get(curr) - 1);
            map.set(curr + 1, map.get(curr + 1) - 1);
            map.set(curr + 2, map.get(curr + 2) - 1);
        } else if (map.get(curr) > 0){
            return false;
        }
        i++;
    }
    return true;
};
let result = isPossible([1, 2, 3, 4, 4, 5, 5, 6]);
console.log(result, 'rrr')
