// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。
//
// 示例：
// 输入：[[10,20],[30,200],[400,50],[30,20]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 50。
// 第四个人去 B 市，费用为 20。
//
// 最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。  
// 提示：
// 1 <= costs.length <= 100
// costs.length 为偶数
// 1 <= costs[i][0], costs[i][1] <= 1000

/**
 * @param {number[][]} costs
 * @return {number}
 */
/**这道题的关键思路：先将所有人飞往B市，再从中挑选N人飞往A市，计算其中飞往A市成本最小的N个人，再将他们的费用相加即可得到最低费用*/
var twoCitySchedCost = function(costs) {
    let len = costs.length;
    /**第一步，挑选去A市的N个人*/
    costs = costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));
    let sum = costs.reduce((curr, next, index) => {
        if (index < len / 2) {
            return (Array.isArray(curr) ? curr[0] : curr) + next[0]; /**此处需注意，第一次传入的curr是数组，后续传入的则是数值*/
        } else {
            return curr + next[1];  /**此处需注意curr的值已经不是数组了，而是前一步计算出来的和*/
        }
    });
    return sum;
};
let result = twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]);
console.log(result, 'jjjj');

