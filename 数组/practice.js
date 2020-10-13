/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let another = target - nums[i];
        if (map.has(another)) {
            return [map.get(another), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
let result = twoSum([2,7,11,15], 9);
console.log(result, 'jk')
