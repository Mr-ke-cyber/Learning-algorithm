// 给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。
// 我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。
// 示例 1:
// 输入: [4,2,3]
// 输出: True
// 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
// 示例 2:
// 输入: [4,2,1]
// 输出: False
// 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
// 说明:  n 的范围为 [1, 10,000]。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    const check = function (arr) {
        let i = 1;
        while (i < arr.length) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
            i++;
        }
        return true;
    };
    let i = 1;
    while (i < nums.length) {
        if (nums[i] < nums[i - 1]) {
            let temp = nums.slice();
            nums.splice(i - 1, 1);
            temp.splice(i, 1);
            if (!check(nums) && !check(temp)) return false;
        }
        i++;
    }
    return true;
};
/*方法二：*/
var checkPossibility2 = function(nums) {
    let i = 0;
    let count = 0;
    while (i < nums.length - 1) {
        let temp = nums[i];
        if (nums[i] > nums[i + 1]) {
            if (i === 0) {
                nums[i] = nums[i + 1];
            } else {
                nums[i] = nums[i - 1];
            }
            if (nums[i] > nums[i + 1]) {
                nums[i] = temp;
                nums[i + 1] = nums[i];
            }
            count++;
            if (count > 1) return false;
        }
        i++;
    }
    return true;
};
let result = checkPossibility2([3,4,2,3]);
console.log(result);