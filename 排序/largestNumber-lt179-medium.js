// 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。
// 示例 1:
// 输入: [10,2]
// 输出: 210
// 示例 2:
// 输入: [3,30,34,5,9]
// 输出: 9534330
// 说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
/**
 * @param {number[]} nums
 * @return {string}
 */
/*自定义法*/
var largestNumber = function(nums) {
    nums = nums.sort(function (a, b) {
        a = (a + "");
        let al = a.length;
        b = (b + "");
        let bl = b.length;
        let len = Math.max(al, bl);
        let i = 0;
        while (i < len) {
            let av = a.charAt(i) ? a.charAt(i) * 1 : Math.max(a.charAt(0) * 1, a.charAt(al - 1) * 1);
            let bv = b.charAt(i) ? b.charAt(i) * 1 : Math.max(b.charAt(0) * 1, b.charAt(bl - 1) * 1);
            if (bv > av && av >= 0) {
                return 1;
            } else if (bv < av && bv >= 0) {
                return -1;
            } else if (i === len - 1) {
                return al > bl ? -1 : 1;
            }
            i++;
        }
        return 0;
    });
    if (nums[0] === 0) return "0"; // 最大值都为0，说明后面的一定都是0
    return nums.join("");
};
let result = largestNumber([830,8308]);
console.log(result);