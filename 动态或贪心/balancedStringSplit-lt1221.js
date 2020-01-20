// 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
// 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
// 返回可以通过分割得到的平衡字符串的最大数量。

// 示例 1：
// 输入：s = "RLRRLLRLRL"
// 输出：4
// 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。
// 示例 2：
// 输入：s = "RLLLLRRRLR"
// 输出：3
// 解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。
// 示例 3：
// 输入：s = "LLLLRRRR"
// 输出：1
// 解释：s 只能保持原样 "LLLLRRRR".
//     提示：
// 1 <= s.length <= 1000
// s[i] = 'L' 或 'R'
/**
 * @param {string} s
 * @return {number}
 */
/**这是比较笨拙的解法*/
var balancedStringSplit = function(s) {
    const isBalancedString = function (s1) {
          let countL = 0;
          let countR = 0;
          for (let i of s1) {
              i === 'L' && countL++;
              i === 'R' && countR++;
          }
          return countR === countL && countL > 0;
    };
    let start = 0;
    let end = 2;
    let result = 0;
    while (end <= s.length) {
        let temp = s.substring(start, end);
        if (isBalancedString(temp)) {
            start = end;
            end += 2;
            result++;
        } else {
            end += 2;
        }
    }
    return result;
};

/**较为巧妙的解法：*/
let balancedStringSplit2 = function (s) {
    let result = 0;
    let step = 0;
    for (let i = 0; i < s.length; i++) {         /**经多次提交对比发现，for of循环的性能要比for循环性能低，故此处使用普通for循环*/
        s[i] === 'R' ? step++ : step--;
        step === 0 && result++;
    }
    return result;
};

let result = balancedStringSplit2('LLLLRRRR');
console.log(result);
