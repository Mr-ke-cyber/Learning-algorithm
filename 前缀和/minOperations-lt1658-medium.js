// 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。
// 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。
// 示例 1：
//
// 输入：nums = [1,1,4,2,3], x = 5
// 输出：2
// 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
// 示例 2：
//
// 输入：nums = [5,6,7,8,9], x = 4
// 输出：-1
// 示例 3：
//
// 输入：nums = [3,2,20,1,1,3], x = 10
// 输出：5
// 解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let len = nums.length;
    let preSum = new Array(len + 1).fill(0);
    if(nums[len - 1] > x && nums[0] > x) {
        return -1;
    }
    for (let i = 0; i < len; i++) {
        preSum[i + 1] = nums[i] + preSum[i];
    }
    let endSum = new Array(len + 1).fill(0);
    let map = new Map();
    map.set(0, 0);
    let idx = 1;
    for(let j = len - 1; j >= 0; j--) {
        endSum[idx] = nums[j] + endSum[idx - 1];
        map.set(endSum[idx], idx);
        idx++;
    }
    if (preSum[len] < x || endSum[len] < x) {
        return -1;
    }
    let res = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < len; i++) {
        let pre = preSum[i];
        if (map.has(x - pre)) {
            res = Math.min(res, map.get(x - pre) + i);
        }
    }
    return res;
};
