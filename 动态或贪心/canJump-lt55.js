// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。
//
// 示例 1:
// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
//
// 示例 2:
// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/** 方法一：较为笨拙的动态规划解法*/
var canJump = function(nums) {
    if (nums.length === 1) {
        return true;
    } else if (nums[0] === 0) {           /** 只有一个元素和一开始就是以0元素为开头的边界情况也需要注意*/
        return false;
    }
    let len = nums.length;
    let dp = Array(len).fill(0);
    for (let i = 0; i < len - 1; i++) {
        let curr = nums[i];
        if (i > 0 && dp[i] === 0) {
            return false;                  /** 中间有阻断的情况下没法跳到最后一个*/
        }
        let j = 0;
        while(j < curr) {
            if (i + j + 1 > len - 1) {
                break;
            }
            dp[i + j + 1] += 1;
            j++;
        }
    }
    return dp[len - 1] > 0;
};
/** 方法二：较为高级的解法，每一次都更新最远跳的范围，看最后一个元素在不在最远跳的范围之内*/
var canJump2 = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < i) {          /** 最远跳的范围都够不到第i个元素，即截断了，直接返回false*/
            return false;
        }
        max = Math.max(nums[i] + i, max);
    }
    return true;
};
let result = canJump2([3, 2, 1, 0, 4]);
console.log(result);





