// 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
// 你需要按照以下要求，帮助老师给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 相邻的孩子中，评分高的孩子必须获得更多的糖果。
// 那么这样下来，老师至少需要准备多少颗糖果呢？
//
// 示例 1:
// 输入: [1,0,2]
// 输出: 5
// 解释: 你可以分别给这三个孩子分发 2、1、2 颗糖果。
// 示例 2:
//
// 输入: [1,2,2]
// 输出: 4
// 解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
//      第三个孩子只得到 1 颗糖果，这已满足上述两个条件。
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length;
    if (!len) {
        return 0;
    }
    let dp = new Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            dp[i] = dp[i - 1] + 1;
        } else if (ratings[i] < ratings[i - 1]){
            dp[i] = dp[i - 1] - 1;
            if (dp[i] === 0) {
                let j = i; // 初始值为i 起始增加值为start
                while (true) {
                    dp[j]++;
                    if (dp[j] !== dp[j - 1]) {
                        break;
                    } else {
                        if (ratings[j] === ratings[j - 1]) {
                            break;
                        }
                    }
                    j--;
                }
            } else {
                dp[i] = 1;
            }
        } else {
            if (ratings[i] > ratings[i + 1]) {
                dp[i] = 2;
            }
        }
    }
    // console.log(dp);
    return dp.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
};
let result = candy([1,2,87,87,87,2,1]);
console.log(result, 'fdd')
