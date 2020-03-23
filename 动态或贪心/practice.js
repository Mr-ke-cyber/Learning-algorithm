/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = Array(len).fill(1);
    for (let i = 1; i < len; i++) {
      res[i] = nums[i - 1] * res[i - 1];
    }
    let r = 1;
    for (let j = len - 1; j >= 0; j--) {
        res[j] = res[j] * r;
        r *= nums[j];
    }
    return res;
};
let result = productExceptSelf([1,2,3,4]);
console.log(result, 'jjjj');