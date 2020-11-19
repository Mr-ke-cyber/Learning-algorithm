/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let l = 0, r = 0;
    while (r < len) {
        if (nums[r]) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
        }
        r++;
    }
};
let result = moveZeroes([0,1,0,3,12]);
console.log(result, 'jk')
