// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
//
// 示例 1：
//
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
//
// 输入: "cbbd"
// 输出: "bb"

/**
 * @param {string} s
 * @return {string}
 */
// 动态规划解法
var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    let len = s.length;
    let dp = Array(len).fill('-').map(_ => Array(len).fill(false));
    let longestPalidrome = 1;
    let longestPalidromeStr = s.charAt(0);
    for (let r = 1; r < len; r++) {
        dp[r][r] = true;
        for (let l = 0; l <= r; l++) {
            if (s.charAt(l) === s.charAt(r) && ( r - l < 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
                if (r + 1 - l > longestPalidrome) {
                    longestPalidrome = r + 1 - l;
                    longestPalidromeStr = s.substring(l, r + 1);
                }
            }
        }
    }
    return longestPalidromeStr;
};
let result = longestPalindrome('acbabcf');
console.log(result, 'jjj');
