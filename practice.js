/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
        let t = target - nums[i];
        if (map.has(t)) {
            return [i, map.get(t)];
        }
    }
    return [];
};
