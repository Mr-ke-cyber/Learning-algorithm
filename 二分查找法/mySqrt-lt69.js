// 实现 int sqrt(int x) 函数。
//
// 计算并返回 x 的平方根，其中 x 是非负整数。
//
// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
//
// 示例 1:
//
// 输入: 4
// 输出: 2
// 示例 2:
//
// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842...,
// 由于返回类型是整数，小数部分将被舍去。

/**
 * @param {number} x
 * @return {number}
 */
/*暴力法*/
var mySqrt = function(x) {
    for (let i = 1; i <= x / 2; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i;
        }
    }
};
/*二分法*/
var mySqrt2 = function (x) {
    if (x < 2) return x;
    let left = 1;
    let right = x;
    while(left < right ) {
        let mid = Math.floor((right + left) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        } else if (mid * mid < x){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
let result = mySqrt2(2147395600);
console.log(result);
