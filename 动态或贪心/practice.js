/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    let len = nums.length;
    let dp = Array(len).fill(1);
    let count = Array(len).fill(1);
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    count[i] = count[j];
                    dp[i] = dp[j] + 1;
                } else if (dp[j] + 1 === dp[i]) {
                    count[i] += count[j];
                }
            }
        }
    }
    let ans = 0;
    let longest = Math.max(...dp);
    for (let k = 0; k < len; k++) {
        if (dp[k] === longest) {
            ans += count[k];
        }
    }
    return ans;
};
