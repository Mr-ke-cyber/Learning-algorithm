// 我们把符合下列属性的数组 A 称作山脉：
// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
// 示例 1：
//
// 输入：[0,1,0]
// 输出：1
// 示例 2：
//
// 输入：[0,2,1,0]
// 输出：1
//
// 提示：
// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉
/**
 * @param {number[]} A
 * @return {number}
 */
/*由题意可知有且仅有一个这样的值满足上述条件 可转化为求最大值的索引*/
/*方法一：暴力法*/
var peakIndexInMountainArray = function(A) {
    let maxValue = 0;
    let result = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > maxValue) {
            result = i;
            maxValue = A[i];
        }
    }
    return result;
};
/*方法二：二分查找法*/
var peakIndexInMountainArray2 = function (A) {
    let l = 0;
    let r = A.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (A[mid] < A[mid + 1]) {       // 说明峰值在后半段
            l= mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
};
let result = peakIndexInMountainArray2([0,1,0]);
console.log(result, 'jkl');