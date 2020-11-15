// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。
// 注意:
//     num 的长度小于 10002 且 ≥ k。
// num 不会包含任何前导零。
// 示例 1 :
// 输入: num = "1432219", k = 3
// 输出: "1219"
// 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
// 示例 2 :
// 输入: num = "10200", k = 1
// 输出: "200"
// 解释: 移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 示例 3 :
// 输入: num = "10", k = 2
// 输出: "0"
// 解释: 从原数字移除所有的数字，剩余为空就是0。
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
// 以下方法会得到结果NaN，原因是入参字符串位数太长，造成溢出
var removeKdigits = function(num, k) {
    if (num.length <= k) {
        return "0";
    }
    let len = num.length, res = +num;
    while(k--) {
        let temp = res + "";
        for (let i = 0; i < len; i++) {
            let curr = temp.substring(0, i) + temp.substring(i + 1);
            res = Math.min(res, +curr);
        }
    }
    return res + "";
};
// 全程使用string来处理，从左到右，找到第一个比后面数字都大的，去掉
var removeKdigits2 = function(num, k) {
    let res = num;
    while (k--) {
        if (res.length < 2) {
            return "0"
        }
        let i = 0;
        while (i < res.length) {
            if (res[i] > res[i + 1]) {
                res = res.substring(0, i) + res.substring(i + 1);
                break;
            }
            i++;
            if (i === res.length - 1) {
                res = res.substring(0, i);
            }
        }
    }
    while(res[0] === "0" && res.length > 1) {
        res = res.substring(1);
    }
    return res;
};

let result = removeKdigits2("10200"
,2);
console.log(result, 're')
