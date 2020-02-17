// 我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
// B.length >= 3
// 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
// 给出一个整数数组 A，返回最长 “山脉” 的长度。
// 如果不含有 “山脉” 则返回 0。
// 示例 1：
// 输入：[2,1,4,7,3,2,5]
// 输出：5
// 解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
// 示例 2：
// 输入：[2,2,2]
// 输出：0
// 解释：不含 “山脉”。
// 提示：
// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000
/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let len = A.length;
    let l = 0;
    let maxLen = 0;
    let target = 0; // 记录峰值索引，为下次遍历做准备
    while (l < len) {
        let r = l + 1;
        let up = false;
        let down = false;
        if (A[r] <= A[l]) {
            l = r;
            continue;
        }
        if (l === len - 1) break;
        while (A[r] > A[r - 1] && r < len) {
            r++;
            up = true;
        }
        if (A[r - 1] === A[r]) {
            l = r;
            continue;
        }
        target = r - 1;
        while (A[r - 1] > A[r] && r < len) {
            r++;
            down = true;
        }
        if (up && down) {
            maxLen = Math.max(maxLen, r - l);
            l = target + 1;
        } else {
            break;
        }
    }
    return maxLen;
};
let result = longestMountain([0,1,2,3,4,5,6,7,8,9]);
console.log(result);