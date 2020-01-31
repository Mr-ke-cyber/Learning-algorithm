// 给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。
// 示例 1:
// 输入: [1,2,3,4,5], k=4, x=3
// 输出: [1,2,3,4]
// 示例 2:
// 输入: [1,2,3,4,5], k=4, x=-1
// 输出: [1,2,3,4]
// 说明:
//     k 的值为正数，且总是小于给定排序数组的长度。
// 数组不为空，且长度不超过 104
// 数组里的每个元素与 x 的绝对值不超过 104
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let len = arr.length;
    let result = [];
    /*第一步，先大概找出x在数组中的位置*/
    let l = 0;
    let r = len - 1;
    while (l < r){
        let mid = (l + r) >> 1;
        if (arr[mid] > x) {
            r = mid - 1;
        } else if (arr[mid] < x){
            l = mid + 1;
        } else {
            l = mid;
            break;
        }
    }
    /*第二步，找出x在数组中的位置左右剩余多少个数*/
    if(l === 0) {
        return arr.slice(0, k);
    }
    if (l === len - 1) {
        return arr.slice(len - k, len)
    }
    let j = 0;
    let right = l + 1;
    while(j < k) {
        if (l >= 0 && right < len) {
            let lv = Math.abs(x - arr[l]);
            let rv = Math.abs(x - arr[right]);
            if (lv > rv) {
                result.push(arr[right]);
                right++;
            } else {
                result.unshift(arr[l]);
                l--;
            }
        } else if (right === len) {
            let temp = arr.slice(l -(k - j) + 1, l + 1); // 此处需注意slice的两个参数临界值
            result = temp.concat(result);
            /*达到边界条件，已凑齐全部所求数组，需要跳出循环*/
            break;
        } else {
            let temp = arr.slice(right, right + k - j);  // 此处需注意，slice的终点坐标参数需要加上right的值，是在right的基础上再找k - j个数
            result = result.concat(temp);   // 此处需要注意赋值，concat不会改变原数组
            /*达到边界条件，已凑齐全部所求数组，需要跳出循环*/
            break;
        }
        j++;
    }
    return result;
};
let result = findClosestElements([1,2,3,3,6,6,7,7,9,9], 8,8);
console.log(result);