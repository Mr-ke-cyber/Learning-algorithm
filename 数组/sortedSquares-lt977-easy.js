// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
//
// 示例 1：
//
// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 示例 2：
//
// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
/**
 * @param {number[]} A
 * @return {number[]}
 */
// 方法一，常规解法，排序
var sortedSquares = function(A) {
    return A.sort((a, b) => Math.abs(a) - Math.abs(b)).map((item) => {
        return item * item;
    })
};
// 方法二，双指针
var sortedSquares2 = function(A) {
    let len = A.length;
    let result = new Array(len).fill(0);
    for (let i = 0, j = len - 1, pos = len - 1; i <= j; ) {
        if (A[i] * A[i] < A[j] * A[j]) {
            result[pos] = A[j] * A[j];
            j--;
        } else {
            result[pos] = A[i] * A[i];
            i++;
        }
        pos--;
    }
    return result;
};
// 方法三，双指针
var sortedSquares3 = function(A) {
    let len = A.length;
    let result = new Array(len).fill(0);
    let negative = -1;
    for(let i = 0; i < len; i++) {
        if (A[i] < 0) {
            negative = i;
        } else {
            break;
        }
    }
    let index = 0;
    let j = negative, k = negative + 1;
    while(j >= 0 || k < len) {
        if (j < 0) {    //  第一个元素就是正值，故所有元素都是正值
            result[index] = A[k] * A[k];
            k++;
        } else if (j === len - 1) {  //  表示所有元素都小于0，为负数
            result[index] = A[j] * A[j];
            j--;
        } else if (A[k] * A[k] < A[j] * A[j]) {
            result[index] = A[k] * A[k];
            k++;
        } else {
            result[index] = A[j] * A[j];
            j--;
        }
        index++;
    }
    return result;
};
let result = sortedSquares3([-7,-3,2,3,11]);
console.log(result, 'kk')
