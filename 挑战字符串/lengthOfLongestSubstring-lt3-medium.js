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
    let res = 0;
    let map = new Map();
    let l = 0;
    let r = 0;
    while (r < len) {
        let curr = s.charAt(r);
        if (map.has(curr)) {
            res = Math.max(res, map.size);
            while (l < r) {
                let curr2 = s.charAt(l);
                map.delete(curr2);
                if (!map.has(curr)){
                    map.set(curr, true);
                    l++;
                    r++;
                    break;
                }
                l++;
            }
        } else {
            map.set(curr, true);
            r++;
        }
    }
    if (r === len) {
        res = Math.max(res, map.size);
    }
    return res;
};
let result = lengthOfLongestSubstring("pwwkew");
console.log(result);