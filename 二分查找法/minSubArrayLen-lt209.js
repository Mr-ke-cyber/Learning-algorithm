// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组。如果不存在符合条件的连续子数组，返回 0。
//
// 示例:
//     输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。
// 进阶:
//     如果你已经完成了O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
/*方法一：双指针*/
var minSubArrayLen = function(s, nums) {
    let len = nums.length;
    let l = 0;
    let r = 0;
    let sum = 0;
    let result = Number.MAX_SAFE_INTEGER;
    while ( r < len) {
        sum += nums[r];
        r++;
        while (sum >= s) {
            result = Math.min(result, r - l );  // 此处需注意，长度是r - l ,因为前面r++了，所以不需要再加1
            sum -= nums[l];
            l++;
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result; // 此处需注意边界条件
};
/*方法二：暴力法*/
let minSubArrayLen2 = function (s, nums) {
    let len = nums.length;
    let sum = Array(len).fill(0);
    sum[0] = nums[0];
    for (let i = 1; i < len; i++) {
        sum[i] = sum[i - 1] + nums[i];   /*注意此处构造的单调递增数组，为下一个二分查找法创造条件*/
    }
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        let s2 = s - nums[i];
        for (let j = i; j < len; j++) {
            if (sum[j] - sum[i] >= s2) {
                result = Math.min(result, j - i + 1);
                break;
            }
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 :result;
};
/*方法三：二分法*/
var minSubArrayLen3 = function (s, nums) {
    let len = nums.length;
    let sum = Array(len).fill(0);
    let result = Number.MAX_SAFE_INTEGER;
    const findIndex = function (l, r, sum, target) {
        let mid = -1;
        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            if (sum[mid] > target) {
                r = mid - 1;
            } else if (sum[mid] < target) {
                l = mid + 1;
            } else {
                return mid;
            }
        }
        return sum[mid] > target ? mid : -1;
    }
    for (let i = 1; i < len; i++) {
        sum[i] = nums[i] + sum[i - 1];
    }
    for (let i = 0; i < len; i++) {
       /*要求sum[j] - sum[i] >=  s2  只需要求sum[j] >= s2 + sum[i]*/
       let s2 = s - nums[i];
       let k = findIndex(i, len - 1, sum, s2 + sum[i]);
       if (k !== -1) {
           result = Math.min(result, k - i + 1);
       }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};
let result = minSubArrayLen3(7,[2,3,1,2,4,3]);
console.log(result);

