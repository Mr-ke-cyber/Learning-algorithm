// 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
// 示例 1:
// 输入: "aacecaaa"
// 输出: "aaacecaaa"
// 示例 2:
// 输入: "abcd"
// 输出: "dcbabcd"
/**
 * @param {string} s
 * @return {string}
 */
/*初一看到这个题目，思路是先找出字串中已经存在的最长回文串，再将这个回文串添加字符扩展至整个字串，那么它就是找到的转换的最短回文串了*/
/*注意读题，题意是在字符串前面添加字串，不用考虑在字符串后面添加字串的情况 刚开始做成了在首尾都可以增加字母的情况*/
/*解法一 暴力法*/
var shortestPalindrome = function (s) {
    let len = s.length;
    let rev = s.split("").reverse().join("");
    for (let i = 0; i < len; i++) {
        if (s.substring(0, len - i) === rev.substring(i)) {
            return rev.substring(0, i) + s;
        }
    }
    return ""
};
/*解法二：双指针法与递归法*/
var shortestPalindrome2 = function (s) {
    let len = s.length;
    let l = 0;
    for (let r = len - 1; r >= 0; r--) {
        if (s.charAt(r) === s.charAt(l)) {
            l++;
        }
    }
    if (l === len) {
        return s;
    }
    let remain_rev = s.slice(l, len).split("").reverse().join("");
    return remain_rev + shortestPalindrome2(s.slice(0, l)) + s.slice(l);  // 此处递归较难想到，很有可能直接返回了，关键点在于0 - l字串不一定就是回文子串
};

let result = shortestPalindrome2("aababa");
console.log(result);