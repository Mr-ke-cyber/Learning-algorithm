/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let result = 1;
    let temp = 1;
    let i = 1;
    while (i < nums.length) {
        if (nums[i] > nums[i - 1]) {
            temp++;
        } else {
            result = Math.max(temp, result);
            temp = 1;
        }
        i++;
    }
    return Math.max(result, temp);
};
let result = findLengthOfLCIS([1,3,5,7]);
console.log(result, 'j');
