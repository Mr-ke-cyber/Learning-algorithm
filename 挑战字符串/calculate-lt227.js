// 实现一个基本的计算器来计算一个简单的字符串表达式的值。
// 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
// 示例 1:
// 输入: "3+2*2"
// 输出: 7
// 示例 2:
// 输入: " 3/2 "
// 输出: 1
// 示例 3:
// 输入: " 3+5 / 2 "
// 输出: 5
// 说明：
// 你可以假设所给定的表达式都是有效的。
// 请不要使用内置的库函数 eval。
/**
 * @param {string} s
 * @return {number}
 */
/*感觉此题比较难以想到*/
var calculate = function(s) {
    s = s.replace(/[" "]/g, "");
    let res = [];
    let len = s.length;
    let i = 0;
    let flag = 1;
    while (i < len) {
        let start = i;
        let curr = s.charAt(i);
        if (curr === "+") {
            flag = 1;
            i++;
            continue;
        } else if (curr === "-") {
            i++;
            flag = -1;
            continue;
        } else if (curr === "*" || curr === "/") {
            let temp = res.pop();
            i++;
            while (i < len && !isNaN(s.charAt(i) * 1)) {
                i++;
            }
            let nextNumber = s.slice(start + 1, i) * 1;
            temp = curr === "*" ? temp * nextNumber : parseInt(temp / nextNumber);
            res.push(temp);
            continue;
        }
        while (i < len && !isNaN(s.charAt(i) * 1)) {
            i++;
        }
        let currNumber = s.slice(start, i) * 1;
        res.push(currNumber * flag);
        flag = 1;
    }
    return res.reduce((curr, next) => curr + next, 0);
};
let result = calculate("0/1");
console.log(result);