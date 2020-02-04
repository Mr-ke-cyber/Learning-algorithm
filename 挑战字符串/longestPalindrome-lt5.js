// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：
// 输入: "cbbd"
// 输出: "bb"
/**
 * @param {string} s
 * @return {string}
 */
/*方法一：动态规划解法*/
var longestPalindrome = function(s) {
    let len = s.length;
    if (len === 1) return s;
    let dp = Array(len).fill(false);
    let longestPalindromeStr = s.charAt(0);
    let maxLen = 1;
    for (let r = 1; r < len; r++) {
        dp[r][r] = true;
        for (let l = 0; l <= r; l++) {
            if (s.charAt(l) === s.charAt(r) && (r - l === 1 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
                if (r - l + 1 > maxLen) {
                    maxLen = r - l + 1;
                    longestPalindromeStr = s.substring(l, r + 1);
                }
            }
        }
    }
    return longestPalindromeStr;
};