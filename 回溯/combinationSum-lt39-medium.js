// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:
// 输入: candidates = [2,3,6,7], target = 7,
//     所求解集为:
// [
//     [7],
//     [2,2,3]
// ]
// 示例 2:
// 输入: candidates = [2,3,5], target = 8,
//     所求解集为:
// [
//     [2,2,2,2],
//     [2,3,3],
//     [3,5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/*方法一：回溯*/
var combinationSum = function(candidates, target) {
    let len = candidates.length;
    let res = [];
    let tempPath = [];
    const getTarget = function (tempPath, t, start) {
        if (t < 0) {
            return;
        }
        if (t === 0) {
            res.push(tempPath);
            return;
        }
        for (let i = start; i < len; i++) {
            tempPath.push(candidates[i]);
            getTarget(tempPath.slice(), t - candidates[i], i);
            tempPath.pop();  //  不论下一步是否能找到正确的答案，都要回退一步，以方便进行下一步判断
        }
    };
    getTarget(tempPath, target, 0);
    return res;
};
/*方法二：回溯 + 剪枝*/
var combinationSum2 = function (candidates, target) {
    let len = candidates.length;
    let res = [];
    let tempPath = [];
    candidates = candidates.sort((a, b) => a - b);
    const getTarget = function (tempPath, t, start) {
        if (t === 0) {
            res.push(tempPath);
            return;
        }
        for (let i = start; i < len; i++) {
            if (t < candidates[i]) break;
            tempPath.push(candidates[i]);
            getTarget(tempPath.slice(), t - candidates[i], i);
            tempPath.pop();  //  不论下一步是否能找到正确的答案，都要回退一步，以方便进行下一步判断
        }
    };
    getTarget(tempPath, target, 0);
    return res;
};