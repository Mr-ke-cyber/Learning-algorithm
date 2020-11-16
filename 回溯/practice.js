/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;
    let tempPath = [];
    let res = [];
    const backTrace = (tempPath) => {
        if(tempPath.length === len) {
            res.push(tempPath.slice());
        }
        for(let i = 0; i < nums.length; i++) {
            if (!tempPath.includes(nums[i])) {
                tempPath.push(nums[i]);
                backTrace(tempPath);
                tempPath.pop();
            }
        }
    };
    backTrace(tempPath);
    return res;
};
let result = permute([1,2,3]);
console.log(result, 'jk')
