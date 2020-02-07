// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。
// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
// 注意：
// 你可以假设两个字符串均只含有小写字母。
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/*根据测试用例的意思，杂志上的字母只可以用一次，不需要严格按照顺序*/
var canConstruct = function(ransomNote, magazine) {
    let len1 = ransomNote.length;
    magazine = magazine.split("");
    for (let i = 0; i < len1; i++) {
        let curr = ransomNote.charAt(i);
        let target = magazine.indexOf(curr);
        if (target >= 0) {
            magazine.splice(target, 1);
        } else {
            return false;
        }
    }
    return true;
};
let result = canConstruct("", "");
console.log(result);