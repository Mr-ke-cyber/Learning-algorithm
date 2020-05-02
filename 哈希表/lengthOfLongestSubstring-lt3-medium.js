// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let set = new Set();
    let res = 0;
    let l = 0;
    let r = 0;
    while (l < len) {
        if (l !== 0) {
            set.delete(s.charAt(l - 1));
        }
        while (!set.has(s.charAt(r)) && r < len) {
            set.add(s.charAt(r));
            r++;
        }
        res = Math.max(res, r - l);
        l++;
    }
    return res;
};
let result = lengthOfLongestSubstring('dvdf');
console.log(result, 'jjjj');
