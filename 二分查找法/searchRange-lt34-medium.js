// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 如果数组中不存在目标值，返回 [-1, -1]。
// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]
// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [-1, -1];
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = l + ((r - l) >> 1);  // 注意加号的优先级比>>高
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] === target) {
            let left = mid;
            let right = mid;
            while (nums[left] === target) {
                left--;
            }
            while (nums[right] === target) {
                right++;
            }
            res = [left + 1, right - 1];
            break;
        } else {
            r = mid - 1;
        }
    }
    return res;
};
let result = searchRange([1], 1);
console.log(result);