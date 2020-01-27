// 给定两个数组，编写一个函数来计算它们的交集。
// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:
//
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:
//
//     输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/** 传统解法*/
var intersection = function(nums1, nums2) {
    nums1 = Array.from( new Set(nums1));
    nums2 = Array.from(new Set(nums2));
    let flag = nums1.length > nums2.length;
    let temp = flag ? nums2 : nums1;
    let temp2 = flag ? nums1 : nums2;
    let result = [];
    for (let i = 0; i < temp.length; i++) {
        if (temp2.indexOf(temp[i]) >= 0) {   // 注意此处等于0时候不能漏掉
            result.push(temp[i]);
        }
    }
    return result;
};

let result = intersection([4,9,5], [9,4,9,8,4]);
console.log(result);