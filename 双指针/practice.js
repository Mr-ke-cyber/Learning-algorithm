/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if (!nums.length) return 0;
    let i = 0, j = 0;
    let currSum = nums[i];
    let curr = [nums[i]];
    let min = Number.MAX_SAFE_INTEGER;
    let result = [];
    while (j < nums.length) {
        if (currSum < s) {
            j++;
            currSum += nums[j];
            curr.push(nums[j]);
        } else {
            while(currSum >= s) {
                if (curr.length < min) {
                    result = curr.slice();
                    min = result.length;
                }
                currSum -= curr.shift();
                i++;
            }
        }
    }
    return result;
};
let result = minSubArrayLen(100, [2, 3, 1, 2, 4, 3]);
console.log(result, 'result')
