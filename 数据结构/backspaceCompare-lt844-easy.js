// 给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
// 注意：如果对空文本输入退格字符，文本继续为空。
//
// 示例 1：
//
// 输入：S = "ab#c", T = "ad#c"
// 输出：true
// 解释：S 和 T 都会变成 “ac”。
// 示例 2：
//
// 输入：S = "ab##", T = "c#d#"
// 输出：true
// 解释：S 和 T 都会变成 “”。
// 示例 3：
//
// 输入：S = "a##c", T = "#a#c"
// 输出：true
// 解释：S 和 T 都会变成 “c”。
// 示例 4：
//
// 输入：S = "a#c", T = "b"
// 输出：false
// 解释：S 会变成 “c”，但 T 仍然是 “b”。
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 栈的解法
var backspaceCompare = function(S, T) {
    const transform = (str) => {
        let res = [];
        for(let i = 0; i < str.length; i++) {
            if(str.charAt(i) !== "#") {
                res.push(str.charAt(i));
            } else {
                res.pop();
            }
        }
        return res.join("");
    };
    return transform(S) === transform(T);
};
// 双指针解法
var backspaceCompare2 = function(S, T) {
    let i = S.length - 1, j = T.length - 1, skipS = 0, skipT = 0;
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S[i] === "#") {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (T[j] === "#") {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (S[i] !== T[j]) {
                return false;
            }
        } else if (i >= 0 || j >= 0) {
            return false;
        }
        i--;
        j--;
    }
    return true;
};
const result = backspaceCompare2("j##yc##bs#srqpfzantto###########i#mwb",
"j##yc##bs#srqpf#zantto###########i#mwb");
console.log(result);




