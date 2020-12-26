// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
// 示例 1:
// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:
// 输入: nums = [1], k = 1
// 输出: [1]
//
// 提示：
// 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
// 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
// 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
// 你可以按任意顺序返回答案。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let len = nums.length;
    let map = new Map();
    for(let i = 0; i < len; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let temp = [];
    for(let item of map.entries()) {
        temp.push(item);
    }
    temp.sort((a, b) => b[1] - a[1]);
    let i = 0, res = [];
    while (i < k) {
        res.push(temp[i][0]);
        i++;
    }
    return res;
};
let result = topKFrequent([5,6,8,1,1,1,2,2,3,2,3,3,4,2], 2);
console.log(result, 'k')
