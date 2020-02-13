// 一行中有 N 张多米诺骨牌，我们将每张多米诺骨牌垂直竖立。
// 在开始时，我们同时把一些多米诺骨牌向左或向右推。
// 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。
// 同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。
// 如果同时有多米诺骨牌落在一张垂直竖立的多米诺骨牌的两边，由于受力平衡，该骨牌仍然保持不变。
// 就这个问题而言，我们会认为正在下降的多米诺骨牌不会对其它正在下降或已经下降的多米诺骨牌施加额外的力。
// 给定表示初始状态的字符串 "S" 。如果第 i 张多米诺骨牌被推向左边，则 S[i] = 'L'；如果第 i 张多米诺骨牌被推向右边，则 S[i] = 'R'；如果第 i 张多米诺骨牌没有被推动，则 S[i] = '.'。
// 返回表示最终状态的字符串。
// 示例 1：
// 输入：".L.R...LR..L.."
// 输出："LL.RR.LLRRLL.."
// 示例 2：
// 输入："RR.L"
// 输出："RR.L"
// 说明：第一张多米诺骨牌没有给第二张施加额外的力。
// 提示：
// 0 <= N <= 10^5
// 表示多米诺骨牌状态的字符串只含有 'L'，'R'; 以及 '.';
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let s = "L" + dominoes + "R";
    let len = s.length;
    let l = 0;
    let res = "";
    while (l < len) {
        let r = l + 1;
        while (s[r] === ".") {
            r++;
        }
        let len = r - l - 1;  // 先找出.的个数
        res += s[l];       // 不论len是否为0，都先把左边界的值加起来
        if (len === 0) {
            l = r;
            continue
        }
        if (s[l] === "L" && s[r] === "R") {  // 注意此处左边往左倒，右边往右倒，那么中间依然是.
            let i = 0;
            while (i < len) {
                res += ".";
                i++;
            }
        } else if (s[l] === "R" && s[r] === "L") {  // 此处左边往右边倒，右边往左边倒，故需要判断.是奇数个还是偶数个
            let num = 0;
            if (len % 2 === 0) {      //  偶数个.
                num = len / 2;
            } else {
                num = (len - 1) / 2;
            }
            let j = 0;
            while (j < num) {
                res += "R";
                j++;
            }
            if (len % 2 !== 0) {
                res += ".";
            }
            while (j > 0) {
                res += "L";
                j--;
            }
        } else if (s[l] === s[r]) {
            let j = 0;
            while (j < len) {
                res += s[l];
                j++;
            }
        }
        l = r;
    }
    return res.slice(1, len - 1);
};
let result = pushDominoes(".L.R...LR..L..");
console.log(result);