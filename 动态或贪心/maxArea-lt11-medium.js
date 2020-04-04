// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 示例：
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
/**
 * @param {number[]} height
 * @return {number}
 */
/*方法一：暴力解法*/
var maxArea = function(height) {
    let maxArea = 0;
    for (let r = 1; r < height.length; r++) {
        let l = 0;
        while (l < r) {
            let width = r - l;
            let heights = Math.min(height[r], height[l]);
            if (width * heights > maxArea) {
                maxArea = width * heights;
            }
            l++;
        }
    }
    return maxArea;
};
/*方法二：双指针*/
var maxArea2 = function(height) {
    let maxArea = 0;
    let l = 0, r = height.length - 1;
    while (l < r) {
        maxArea = Math.max(maxArea, (r - l) * Math.min(height[l], height[r]));
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
};
let reuslt = maxArea2([1,8,6,2,5,4,8,3,7]);
console.log(reuslt, 'jkl');





