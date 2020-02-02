// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 示例:
//     输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
/**
 * @param {string} digits
 * @return {string[]}
 */
/*方法一：递归*/
var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }
    let len = digits.length;
    let result = [];
    let map = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz'
    };
    const combination = function (str, letter, i) {
        if (i === len) {         // 注意此处i=0的时候str为空，i=1的时候有一个字母，i=len的时候letter的长度才满足要求
            result.push(letter);
            return;
        }
        let digit = str.charAt(i);
        let words = map[digit];
        for ( let k = 0; k < words.length; k++) {
            combination(str, letter + words.charAt(k), i + 1);
        }
    };
    combination(digits, "", 0);
    return result;
};
/*方法二：队列*/
let letterCombinations2 = function (digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }
    let len = digits.length;
    let result = [""];
    let map = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz'
    };
    for (let i = 0; i < len; i++) {
        let digit = digits[i];
        let letters = map[digit];
        let len2 = result.length;    // 注意此处需要缓存result的长度，因为result的长度是动态更新的。
        for (let j = 0; j < len2; j++) {  // 下一次循环的时候不可以用result.length来取代，否则就无限循环下去了
            let curr = result.shift();
            for (let k = 0; k < letters.length; k++) {
                result.push(curr + letters[k]);
            }
        }
    }
    return result;
};
let result = letterCombinations2("29");
console.log(result);


