// 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
//
// 给定一个数字 n，找出可形成完整阶梯行的总行数。
//
// n 是一个非负整数，并且在32位有符号整型的范围内。
//
// 示例 1:
//
// n = 5
//
// 硬币可排列成以下几行:
//     ¤
// ¤ ¤
// ¤ ¤
//
// 因为第三行不完整，所以返回2.
//     示例 2:
//
// n = 8
// 硬币可排列成以下几行:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤
//
// 因为第四行不完整，所以返回3.

/**
 * @param {number} n
 * @return {number}
 */
/*暴力解法*/
var arrangeCoins = function (n) {
    if(n === 0) return 0;
    for (let i = 1; i <= n; i++) {
        let total = (1 + i) * i / 2;
        if (total === n || (total < n && ((i + 1) * (1 + i + 1) / 2) > n)) {
            return i;
        }
    }
};
/*二分法*/
var arrangeCoins2 = function (n) {
    let left = 0;
    let right = n;
    let sum = function (i) {
        return (i + 1) * i / 2;
    };
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (sum(mid) === n) {
            return mid;
        } else if (sum(mid) < n){
            if (sum(mid + 1) > n) {
                return mid;
            }
            left = mid + 1;
        } else {
            if (sum(mid - 1) < n) {
                return mid - 1;
            }
            right = mid - 1;
        }
    }
};
let result = arrangeCoins2(1);
console.log(result);



