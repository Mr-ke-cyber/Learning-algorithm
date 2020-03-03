// 给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
// 初始化 A 和 B 的元素数量分别为 m 和 n。
// 示例:
//     输入:
//         A = [1,2,3,0,0,0], m = 3
// B = [2,5,6],       n = 3
// 输出: [1,2,2,3,5,6]
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//方法一
var merge = function(A, m, B, n) {
    A.splice(m,n, ...B);
    A.sort((a,b) => a - b);
};
// 方法二
var merge2 = function (A, m, B, n) {
    let i = 0, j = 0, k = 0;
    A.splice(m,n);
    while (k < m + n && j < n) {
        if (A[i] < B[j]) {
            A[k++] = A[i++];
        } else {
            A.splice(k, 0, 0);
            A[k++] = B[j++];
            i = k;
        }
    }
    return A;
};
let result = merge2([1,3,9,0,0,0], 3, [2,4,5], 3);
console.log(result);





