/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const another = target - nums[i];
        if (another in map) {
            return [map[another], i]
        }
        map[nums[i]] = i
    }
};
let result = twoSum([1,3,4,2], 6);
console.log(result);
