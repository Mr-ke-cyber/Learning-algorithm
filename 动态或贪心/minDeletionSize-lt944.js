// 你需要选出一组要删掉的列 D，对 A 执行删除操作，使 A 中剩余的每一列都是 非降序 排列的，然后请你返回 D.length 的最小可能值。
// 示例 1：
//
// 输入：["cba", "daf", "ghi"]
// 输出：1
// 解释：
// 当选择 D = {1}，删除后 A 的列为：["c","d","g"] 和 ["a","f","i"]，均为非降序排列。
// 若选择 D = {}，那么 A 的列 ["b","a","h"] 就不是非降序排列了。
// 示例 2：
//
// 输入：["a", "b"]
// 输出：0
// 解释：D = {}
// 示例 3：
//
// 输入：["zyx", "wvu", "tsr"]
// 输出：3
// 解释：D = {0, 1, 2}
//
// 提示：
//
// 1 <= A.length <= 100
// 1 <= A[i].length <= 1000
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let len = A.length;
    let wordLen = A[0].length;
    let result = 0;
    for (let i = 0; i < wordLen; i++) {
        let j = 1;
        while(j < len) {
            if(A[j].charCodeAt(i) < A[j - 1].charCodeAt(i)) {
                result++;
                break;
            }
            j++;
        }
    }
    return result;
};
let result = minDeletionSize(["cba", "daf", "ghi"]);
console.log(result);




















