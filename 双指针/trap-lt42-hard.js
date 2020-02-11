// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。
/**
 * @param {number[]} height
 * @return {number}
 * 比较经典的接雨水问题
 */
var trap = function(height) {
    let res = 0;
    let len = height.length;
    let l = 0;
    const getSum = function (l, r) {
        let currHeight = Math.min(height[l], height[r]);  /*计算一个区间内形成区间的高度*/
        for (let i = l + 1; i < r; i++) {
            res += currHeight - height[i];
        }
    };
    while (l < len) {
        if (height[l] === 0) {
            l++;
            continue;
        }
        let r = l + 1;
        if (height[r] >= height[l]) {
            l = r;
            continue;
        }

        let flag = false;          // 标记是否有比左边更高的
        while (r < len) {        // 判断剩下的柱子之间有没有比左边更高的，如果有，就形成一个区间，如果没有，则判断右边剩下的柱子能否与左边这个柱子形成区间
            if (height[r] >= height[l]) {
                getSum(l, r);
                l = r;
                flag = true;
                break;
            }
            r++;
        }
        if (!flag) {    /*若右边不存在比左边更高的能与左边一起形成区间的柱子，则找右区间内最高的元素与左边形成区间*/
            let r = l + 1;   /*重置r的值*/
            let maxHeight = height[r];
            let target = r;
            while (r < len) {              /*找到右区间的最大值后，开始求和*/
                if (height[r] >= maxHeight && r > target){
                    maxHeight = height[r];
                    target = r;
                }
                r++;
            }
            getSum(l, target);
            if (target === len - 1) break; /*遍历到末尾了*/
            l = target;
        }
    }
    return res;
};
let result = trap([0,7,1,4,6]);
console.log(result);