// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
// 请你实现这个将字符串进行指定行数变换的函数：
// string convert(string s, int numRows);
// 示例 1:
//
// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:
//
// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:
// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let len = s.length;
    if (len < 2 || numRows === 1) {   // 边界情况
        return s;
    }
    let temp = Array(numRows).fill("");
    let flag = -1;
    let j = 0;
    for (let i = 0; i < len; i++) {
        if (j === 0 || j === numRows - 1) {
            flag = -flag;
        }
        let curr = flag > 0 ? j++ : j--;
        temp[curr] += s.charAt(i);
    }
    return temp.join("");
};
let result = convert('ABCD', 1);
console.log(result);