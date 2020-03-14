// 给定一个未排序的整数数组，找到最长递增子序列的个数。
// 示例 1:
// 输入: [1,3,5,4,7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
// 示例 2:
// 输入: [2,2,2,2,2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
// 注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let len = nums.length;
    let dp = Array(len).fill(1);
    let count = Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] >= dp[i]) {
                    dp[i] = dp[j] + 1;
                    count[i] = count[j];
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
        }
    }
    let ans = 0;
    let longest = Math.max(...dp);
    for (let k = 0; k < len; k++) {
        if (dp[k] === longest) {
            ans += count[k];
        }
    }
    return ans;
};
let result = findNumberOfLIS([1,2,4,3,5,4,7,2]);
console.log(result, 'jjj');