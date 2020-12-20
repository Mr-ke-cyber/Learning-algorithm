// 给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
// 示例 1：
// 输入：s = "bcabc"
// 输出："abc"
//
// 示例 2：
// 输入：s = "cbacdcbc"
// 输出："acdb"
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let len = s.length, res = [], i = 0, map = new Map();
    while (i < len) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        i++;
    }
    let j = 0;
    while (j < len) {
        if (res.includes(s[j])) {
            map.set(s[j], map.get(s[j]) - 1);
        } else {
            while (res.length > 0 && s[j] <= res[res.length - 1] && map.get(res[res.length - 1]) > 1) {
                let t = res.pop();
                map.set(t, map.get(t) - 1);
            }
            res.push(s[j]);
        }
        j++;
    }
    return res.join("");
};
let result = removeDuplicateLetters("cbacdcbc");
console.log(result);





