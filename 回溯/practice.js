/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;
    let tempPath = [];
    let res = [];
    let used = new Array(len).fill(false);
    nums.sort((a, b) => a - b);
    const backTrace = (tempPath) => {
        if(tempPath.length === len) {
            res.push(tempPath.slice());
        }
        for(let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }
            if (!used[i]) {
                tempPath.push(nums[i]);
                used[i] = true;
                backTrace(tempPath);
                tempPath.pop();
                used[i] = false;
            }
        }
    };
    backTrace(tempPath);
    return res;
};
let result = permute([1,1,2]);
console.log(result, 'jk')
