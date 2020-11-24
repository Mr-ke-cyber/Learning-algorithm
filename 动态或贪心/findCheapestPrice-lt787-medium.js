// 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样的路线，则输出 -1。
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
// dp[i][d]记录经过i次中转到达d的最小花费
let findCheapestPrice = function(n, flights, src, dst, K) {
    let dp = new Array(K + 1).fill("_").map( _ => new Array(n).fill(Number.MAX_SAFE_INTEGER)); // 初始值-1表示初始状态
    for(let flight of flights) {       // src是固定的，不需要维护，只需要维护dp[i][d]
        if (flight[0] === src) {      //  此处为收集数据阶段，即收集从src到各个dist经0次中转所需要的花费
            dp[0][flight[1]] = flight[2];
        }
    }
    for(let k = 0; k < K; k++) {
        dp[k][src] = 0;
    }
    for(let k = 1; k <= K; k++) {
        for(let flight of flights) {
            if (dp[k - 1][flight[0]] !== Number.MAX_SAFE_INTEGER) {
                // 说明能经(k - 1)次转机到达上一步，那么我们需要计算出经K次转机到达本flight[1]次所需的最小花费
                // K次转机所需要的最小花费从上次得到的花费和本次探索的路径中选最小
                dp[k][flight[1]] = Math.min(dp[k][flight[1]], dp[k - 1][flight[0]] + flight[2]);
            }
        }
    }
    return dp[K][dst] === Number.MAX_SAFE_INTEGER ? -1 : dp[K][dst];
}
let result = findCheapestPrice(4,
    [[0,1,1],[0,2,5],[1,2,1],[2,3,1]],
0,
3,
1);
console.log(result, 'jk')
