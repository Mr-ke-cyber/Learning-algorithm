// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被计为是不同的子串。
// 示例 1:
// 输入: "abc"
// 输出: 3
// 解释: 三个回文子串: "a", "b", "c".
//     示例 2:
// 输入: "aaa"
// 输出: 6
// 说明: 6个回文子串: "a", "a", "a", "aa", "aa", "aaa".
//     注意:
// 输入的字符串长度不会超过1000。
/**
 * @param {string} s
 * @return {number}
 */
// 很显然，单个字母就是要找的回文子串，
// 双字母相等的即为要找的子串，不等的不是
// 我们需要找长度为3到s.length的子串
/*使用暴力法发现超时，解决不了。改为使用中心扩展法*/
var countSubstrings = function(s) {
    let len = s.length;
    if (len < 2) return len;
    let result = 0;
    const centerSpread = function (str, left, right) {
        let len = str.length;
        let i = left;
        let j = right;
        while (i >= 0 && j < len) {
            if (str.charAt(i) === str.charAt(j)) {
                result++;
                i--;
                j++;
            } else {
                break;
            }
        }
    };
    for (let i = 0; i < len; i++) {
        centerSpread(s, i, i);
        centerSpread(s, i, i + 1);
    }
    return result;
};
let result = countSubstrings("aaa");
console.log(result);