// 给定一个无序的整数数组，找到其中最长上升子序列的长度。
// 示例:
//     输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:
//
//     可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
/**
 * @param {number[]} nums
 * @return {number}
 */
/*动态规划解法*/
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if (!len) return 0;             // 边界情况不可漏
    let dp = Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
};
let result = lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
console.log(result, 'jla');