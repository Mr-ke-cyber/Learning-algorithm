// 给定一个正整数数组 nums。
// 找出该数组内乘积小于 k 的连续的子数组的个数。
// 示例 1:
// 输入: nums = [10,5,2,6], k = 100
// 输出: 8
// 解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
// 说明:
//     0 < nums.length <= 50000
// 0 < nums[i] < 1000
// 0 <= k < 10^6
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let len = nums.length;
    let res = 0;
    let prod = 1;
    let l = 0;
    for (let r = 0; r < len; r++) {
        prod *= nums[r];
        while (prod >= k) {
            prod /= nums[l++];
        }
        res += r - l + 1;     //  r - l + 1表示以右元素r结尾的子数组的个数，再加上前面的总和，即可得到总得子数组个数，非常类似于动态规划
    }
    return res;
};
let result = numSubarrayProductLessThanK([10,5,2,6], 100);
console.log(result);