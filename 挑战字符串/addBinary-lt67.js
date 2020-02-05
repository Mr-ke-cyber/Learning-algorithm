// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let i = a.length;
    let j = b.length;
    let len = Math.max(i, j);
    let flag = 0;   // 用flag来表示当前是否需要进位
    for (let k = 0; k < len; k++) {
        let av = a.charAt(i - 1 - k) ? a.charAt(i - 1 - k) * 1 : 0;
        let bv = b.charAt(j - 1 - k) ? b.charAt(j - 1 - k) * 1 : 0;
        if ((av + bv + flag) === 3) {
            flag = 1;
            result = "1" + result;
        } else if ((av + bv + flag) === 2) {
            flag = 1;
            result = "0" + result;
        } else if ((av + bv + flag) === 1) {
            result = "1" + result;
            flag = 0;
        } else {
            result = "0" + result;
        }
        if (k === len - 1 && flag === 1) {
            result = "1" + result;
        }
    }
    return result;
};
let result = addBinary("1111", "1111");
console.log(result, 'jlkl');