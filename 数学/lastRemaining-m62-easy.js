// 0,1,,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。
// 例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。
// 示例 1：
// 输入: n = 5, m = 3
// 输出: 3
// 示例 2：
// 输入: n = 10, m = 17
// 输出: 2
// 限制：
// 1 <= n <= 10^5
// 1 <= m <= 10^6
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    let arr = [];
    let i = 0;
    while (i < n) {
        arr.push(i);
        i++;
    }
    let start = 0;
    while (arr.length > 1) {
        let next = start + m - 1;
        while (arr[next] === undefined) {
            next -= arr.length;
        }
        arr.splice(next, 1);
        start = next;
    }
    return arr[0];
};
let result = lastRemaining(1, 0);
console.log(result, 'jkl');