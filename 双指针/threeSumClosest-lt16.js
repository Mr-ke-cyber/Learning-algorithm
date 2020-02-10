// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let len = nums.length;
    let minDiff = Number.MAX_SAFE_INTEGER;   // 求最小差距，差距越小说明越接近。
    let result = 0;
    for (let i = 0; i < len - 1; i++) {
        let left = i + 1;
        let right = len - 1;
        let currSum = 0;
        while (left < right) {
            currSum = nums[left] + nums[i] + nums[right];
            if (Math.abs(target - currSum) < minDiff) {
                minDiff = Math.abs(target - currSum);
                result = currSum;
                if (minDiff === 0) return result;
            }
            if (currSum > target) {
                right--;
            } else if (currSum < target){
                left++;
            } else {
                break;
            }
        }
    }
    return result;
};
let result = threeSumClosest([-1,2,1,-4], 1);
console.log(result);