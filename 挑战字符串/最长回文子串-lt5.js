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
    let longestPalindrome = 1;
    let longestPalindromeStr = s.charAt(0);
    for (let r = 1; r < len; r++) {
        for (let l = 0; l < r; l++) {
            if (l === r) {
                dp[l][r] = true;
            }
            if (s.charAt(l) === s.charAt(r) && (r - l <= 2 || dp[l + 1][r - 1])) {
                dp[l][r] = true;
                if (r - l + 1 > longestPalindrome) {
                    longestPalindrome = r - l;
                    longestPalindromeStr = s.substring(l, r + 1);
                }
            }
        }
    }
    return longestPalindromeStr;
};







let result = longestPalindrome("cbbd");
console.log(result);



