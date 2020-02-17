// 给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
// 注意:
//     字符串长度 和 k 不会超过 104。
// 示例 1:
// 输入:
//     s = "ABAB", k = 2
// 输出:
//     4
// 解释:
//     用两个'A'替换为两个'B',反之亦然。
// 示例 2:
// 输入:
//     s = "AABABBA", k = 1
// 输出:
//     4
// 解释:
//     将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 滑动窗口解法
 */
var characterReplacement = function(s, k) {
    let len = s.length;
    let res = 0;
    let maxCount = 0;
    let alpha = Array(26).fill(0);
    let l = 0;
    let r = 0;
    while (r < len) {
        let c = s[r].toLowerCase();
        let index = c.charCodeAt(0) - 97;
        alpha[index]++;
        maxCount = Math.max(maxCount, alpha[index]);
        if (r - l + 1 - maxCount > k) {     // 总长度减去出现次数最多的，就是需要变换的字母的数量，将其和k进行比对 此处maxCount按道理是应该更新的，但是实际上不需要，因为只是起到一个标志作用
            let d = s[l].toLowerCase().charCodeAt(0) - 97;
            alpha[d]--;
            l++;
        }
        res = Math.max(res, r - l + 1);
        r++;
    }
    return res;
};
let result = characterReplacement("ABBB", 2);
console.log(result, '002');