// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
//
// 示例 1:
//
// 输入: 123
// 输出: 321
// 示例 2:
//
// 输入: -123
// 输出: -321
// 示例 3:
//
// 输入: 120
// 输出: 21

/**
 * @param {number} x
 * @return {number}
 */
// 暂提供这一种解法
var reverse = function(x) {
    let flag = x < 0 ? -1 : 1;
    x = Math.abs(x) + '';
    let result = x.split('').reverse().join('');
    result = result * flag;
    return result >= Math.pow(2, 31) * -1 && result <= Math.pow(2, 31) - 1 ? result : 0;
};
let result = reverse(-123);
console.log(result);


