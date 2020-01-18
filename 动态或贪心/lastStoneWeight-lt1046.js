// 有一堆石头，每块石头的重量都是正整数。
// 每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
//
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
//
// 提示：
//
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if(stones.length < 1) return 0;
    if(stones.length === 1) return stones[0];
    while(stones.length > 1) {
        stones = stones.sort((a, b) => a-b);
        let len = stones.length;
        let x = stones[len - 2];
        let y = stones[len - 1];
        if (x === y) {
            stones = stones.slice(0, len - 2);
        } else {
            y = y - x;
            stones = stones.slice(0, len - 2);
            stones.push(y);
        }
    }
    return stones.length === 1 ? stones[0] : 0;
};
let result = lastStoneWeight([1, 2, 3, 6]);
console.log(result, 'jjjk');
