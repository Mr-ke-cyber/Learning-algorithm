/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const dfs = (arr, y, result) => {
        if (y < 0) {
            result = [];
            return;
        }
        if (y === 0) {
            return result;
        } else {
            result.push(arr[0]);
            y -= arr[0];
            arr.shift();
            dfs(arr, y, result);

            result.push(arr[arr.length - 1]);
            y -= arr[arr.length - 1];
            arr.pop();
            dfs(arr, y, result);
        }
    };
    let res = [];
    dfs(nums, x, res);
    console.log(res, 'res');
};
let result = minOperations([5,6,7,8,9], 9);
console.log(result, 'resss')
