// 给定一个整数数组，判断数组中是否有两个不同的索引 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值最大为 t，并且 i 和 j 之间的差的绝对值最大为 ķ。
// 示例 1:
// 输入: nums = [1,2,3,1], k = 3, t = 0
// 输出: true
// 示例 2:
// 输入: nums = [1,0,1,1], k = 1, t = 2
// 输出: true
// 示例 3:
// 输入: nums = [1,5,9,1,5,9], k = 2, t = 3
// 输出: false
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
/*方法一*/
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && (j - i) <= k) {
                return true;
            }
        }
    }
    return false;
};
/*方法二*/
var containsNearbyAlmostDuplicate2 = function (nums, k, t) {
    let len = nums.length;
    let i =0;
    while (i < len) {
        let j = i + 1;
        while (j - i <= k && j < len) {
            if (Math.abs(nums[j] - nums[i]) <= t) {
                return true;
            }
            if (j === k + i) {
                break;
            }
            j++;
        }
        i++;
    }
    return false;
};
//更高级的解法，使用.some（)）
let result = containsNearbyAlmostDuplicate2([1,2,3,1], 3, 0);
console.log(result);