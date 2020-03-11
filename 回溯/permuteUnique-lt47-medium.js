// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
// 示例:
//     输入: [1,1,2]
// 输出:
//     [
//         [1,1,2],
//         [1,2,1],
//         [2,1,1]
//     ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let used = new Array(nums.length).fill(false);
    nums.sort((a,b)=> a - b);
    function backtrace(nums,tmp){
        if(tmp.length === nums.length){
            res.push([...tmp]);
            return;
        }
        for(let i=0;i<nums.length;i++){
            if(used[i]) continue;
            if(i>0 && nums[i]===nums[i-1] && used[i-1]===false) continue;
            tmp.push(nums[i]);
            used[i] = true;
            backtrace(nums,tmp);
            used[i] = false;
            tmp.pop();
        }

    }
    backtrace(nums,[]);
    return res;
};
let result = permuteUnique([1,1,2]);
console.log(result);

