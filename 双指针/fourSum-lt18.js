// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
// 注意：
// 答案中不可以包含重复的四元组。
// 示例：
// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
//
// 满足要求的四元组集合为：
// [
//     [-1,  0, 0, 1],
//     [-2, -1, 1, 2],
//     [-2,  0, 0, 2]
// ]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let result = [];
    let len = nums.length;
    let tempSet = new Set(); // 去重还有更高级的方式，此处略显笨拙
    for (let k = 0; k < len; k++) {
        for (let j = k + 1; j < len - 2; j++) {
            let l = j + 1;
            let r = len - 1;
            while (l < r) {
                let currSum = nums[k] + nums[j] + nums[l] + nums[r];
                if (currSum === target) {
                    // result.push([nums[k],nums[j],nums[l],nums[r]]);
                    tempSet.add(nums[k] + "," + nums[j] + "," + nums[l] + "," + nums[r]);
                    l++;
                    r--;
                } else if (currSum > target) {
                    r--;
                } else {
                    l++;
                }
            }
        }
    }
    for (let x of tempSet) {
        result.push(x.split(","));
    }
    return result;
};
let result = fourSum([-3,-1,0,2,4,5], 1);
console.log(result, 'jkl');