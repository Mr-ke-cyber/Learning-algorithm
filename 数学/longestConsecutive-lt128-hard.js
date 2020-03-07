// 给定一个未排序的整数数组，找出最长连续序列的长度。
// 要求算法的时间复杂度为 O(n)。
// 示例:
//     输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let len = nums.length;
    let set = new Set();
    let i = 0;
    let res = 0;
    while (i < len) {
        set.add(nums[i]);
        i++;
    }
    for (let v of set) {
       if (!set.has(v - 1)) {
            let curr = v;
            let currLen = 1;
            while (set.has(++curr)) {
                set.delete(curr);
                currLen++;
            }
            res = Math.max(res, currLen);
       }
    }
    return res;
};
let result = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(result);