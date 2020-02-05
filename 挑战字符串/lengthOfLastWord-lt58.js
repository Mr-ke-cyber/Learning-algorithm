// 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
// 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
// 如果不存在最后一个单词，请返回 0 。
// 说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。
// 示例:
//     输入: "Hello World"
// 输出: 5
/**
 * @param {string} s
 * @return {number}
 */
/*题意没有说明字符串首尾有没有可能是空格*/
var lengthOfLastWord = function(s) {
    s = s.trim();
    if (!s) return 0;
    let arr = s.split(" ");
    let lastWord = arr[arr.length - 1];
    return lastWord.length;
};
/*方法二：双指针法*/
var lengthOfLastWord2 = function (s) {
    s = s.trim();
    if (!s) return 0;
    let len = s.length;
    let r = len - 1;
    let l = r - 1 >= 0 ? r - 1 : 0;
    while(l < r && l >= 0) {
        if (s.charAt(l) !== " ") {
            l--;
        } else {
            break;
        }
    }
    return r === l ? 1 : r - l;
};
let result = lengthOfLastWord2("c");
console.log(result, 'jjjj');