// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:
// 输入: [2,2,3,2]
// 输出: 3
// 示例 2:
// 输入: [0,1,0,1,0,1,99]
// 输出: 99
/**
 * @param {number[]} nums
 * @return {number}
 * 
 */
/*方法一：根据和差*/
var singleNumber = function(nums) {
    const getSum = function (arr) {
        return arr.reduce((curr, next) => curr + next);
    };
    let temp = nums.slice();
    nums = [...new Set(nums)];
    return (3 * getSum(nums) - getSum(temp)) / 2;
};
/*方法二：高级的异或解法，一次遍历完成，主要考察异或这个知识点*/
function singleNumber2(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[0] ^= nums[i];
    }
    return nums[0];
};
let result = singleNumber([0,1,0,1,0,1,99]);
console.log(result);