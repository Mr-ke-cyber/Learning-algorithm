// 给定一个没有重复数字的序列，返回其所有可能的全排列。
// 示例:
//     输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length;
    let res = [];
    let tempPath = [];
    const backtrack = function (tempPath) {
        if (tempPath.length === len) res.push(tempPath);
        for (let i = 0; i < len; i++) {
            if (!tempPath.includes(nums[i])) {
                tempPath.push(nums[i]);
                backtrack(tempPath.slice());
                tempPath.pop();
            }
        }
    };
    backtrack(tempPath);
    return res;
};
let result = permute([1,2,3]);
console.log(result);