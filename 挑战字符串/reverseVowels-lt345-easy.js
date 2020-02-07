// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
// 示例1:
// 输入: "hello"
// 输出: "holle"
// 示例 2:
// 输入: "leetcode"
// 输出: "leotcede"
// 说明:
//     元音字母不包含字母"y"。
/**
 * @param {string} s
 * @return {string}
 * 注意测试用例中包含大写字母
 */

var reverseVowels = function(s) {
    s = s.split("");
    let l = 0;
    let r = s.length - 1;
    let map = {
        a : true,
        A : true,
        e : true,
        E : true,
        i : true,
        I : true,
        o : true,
        O : true,
        u : true,
        U : true
    };
    while (l < r) {
        let leftChar = s[l];
        let rightChar = s[r];
        while (!map[leftChar] && l < r) {
            l++;
            leftChar = s[l];
        }
        while (!map[rightChar] && l < r) {
            r--;
            rightChar = s[r];
        }
        if (l >= r) {
            break;
        }
        let temp = leftChar;
        s[l] = rightChar;
        s[r] = temp;
        l++;
        r--;
    }
    s = s.join("");
    return s;
};
let result = reverseVowels("aA");
console.log(result, 'mmm');