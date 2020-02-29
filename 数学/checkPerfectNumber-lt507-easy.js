// 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
// 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
// 示例：
// 输入: 28
// 输出: True
// 解释: 28 = 1 + 2 + 4 + 7 + 14
// 提示：
// 输入的数字 n 不会超过 100,000,000. (1e8)
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let curr = 1;
    let i = 2;
    while (i <= num) {
        if (num % i === 0) {
            curr += i;
        }
        if (curr === num) return true;
        i++;
    }
    return false;
};
/*更高效的解法*/
var checkPerfectNumber2 = function(num) {
    if (num === 1) return false;
    let len = parseInt(Math.sqrt(num));
    let curr = 1;
    let i = 2;
    while (i <= len) {
        if (num % i === 0) {
            curr += i;
            curr += num / i;
        }
        i++;
    }
    return curr === num;
};
let result = checkPerfectNumber2(10);
console.log(result);