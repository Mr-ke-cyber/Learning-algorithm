// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。
//
// 示例 1：
// 输入：["bella","label","roller"]
// 输出：["e","l","l"]
// 示例 2：
//
// 输入：["cool","lock","cook"]
// 输出：["c","o"]
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let arr = [];
    let result = new Map();
    let temp = new Map();
    A.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            let curr = item.charAt(i);
            if (index === 0) {
                temp.get(curr) > 0 ? temp.set(curr, temp.get(curr) + 1) : temp.set(curr, 1);
            } else if (result.has(curr)) {
                if (temp.has(curr)) {
                    temp.set(curr, temp.get(curr) + 1);
                } else {
                    temp.set(curr, 1);
                }
                result.get(curr) > 1 ? result.set(curr, result.get(curr) - 1) : result.delete(curr);
            }
        }
        result = temp;
        temp = new Map();
    });
   for (let i of result.keys()) {
       arr.push(...Array.from({length: result.get(i)}).fill(i))
   }
   return arr;
};
// 解法二：计数法
var commonChars2 = function (A) {
    let minArr = new Array(26).fill(0);
    let result = [];
    A.forEach((item) => {
        let arr = new Array(26).fill(0);
        for (let i = 0; i < item.length; i++) {
            let index = item.charCodeAt(i) - 97;
            ++arr[index];
        }
        for (let i = 0; i < 26; i++) {
            minArr[i] = Math.min(minArr[i], arr[i]);
        }
    });
    for (let i = 0; i < 26; i++) {
        if (minArr[i] > 0) {
            result.push(...Array.from({length: minArr[i]}).fill(String.fromCharCode(i + 97)));
        }
    }
    return result;
};
let result = commonChars2(["bella","label","roller"]);
console.log(result, 99);
