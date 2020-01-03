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

//中心扩散解法
// 技巧：回文串的长度是奇数和偶数的时候，回文中心是不一样的。
let longestPalindrome2 = function (s) {
    if(s.length < 2) return s;
    let longestPalindrome = 1;
    let longestPalindromeStr = s.charAt(0);
    for (let i = 0; i < s.length - 1; i++) {
        let oddStr = centerSpread(s, i, i);
        let evenStr = centerSpread(s,i, i + 1);
        let maxlenStr = oddStr.length > evenStr.length ? oddStr : evenStr;
        if (maxlenStr.length > longestPalindrome) {
            longestPalindrome = maxlenStr.length;
            longestPalindromeStr = maxlenStr
        }
    }
    return longestPalindromeStr;
};

let centerSpread = function (s, left, right) {
    let len = s.length;
    let i = left;
    let j = right;
    while (i >= 0 && j < len) {
        if (s.charAt(i) === s.charAt(j)) {
            i--;
            j++;
        } else {
            break;
        }
    }
    return s.substring(i + 1, j);
};


let result = longestPalindrome2("ecbabcefadce");
console.log(result);



