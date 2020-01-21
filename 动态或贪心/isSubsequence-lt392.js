// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
//
// 示例 1:
// s = "abc", t = "ahbgdc"
//
// 返回 true.
//
// 示例 2:
// s = "axc", t = "ahbgdc"
//
// 返回 false.
//后续挑战 :
//
// 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/** 笨拙一点的方法，通过找出s序列在t序列中的索引顺序并存入临时数组，再判断临时数组是否有序来确定是不是子序列*/
var isSubsequence = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    let temp = [];
    let j = 0;
    for (let i = 0; i < sLen; i++) {
        while (j < tLen) {
            if (s[i] === t[j]) {
                temp.push(j);
                j++;
                break;
            }
            j++;
        }
    }
    if (temp.length < sLen) {
        return false;
    } else {
        for(let k = 1; k < sLen; k++) {
            if (temp[k] < temp[k - 1]) {
                return false;
            }
        }
    }
    return true;
};
/*使用indexOf的优化解法*/
var isSubsequence2 = function(s, t) {
    let sLen = s.length;
    for (let i = 0; i < sLen; i++) {
        if ( t.indexOf(s[i], i) < 0) {
            return false;
        }
    }
    return true;
};

let result = isSubsequence2("abc", "ahbgdc");
console.log(result, 'ahbgdc');




