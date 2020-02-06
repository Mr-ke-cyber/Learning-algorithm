// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
// 案例:
//     s = "leetcode"
// 返回 0.
// s = "loveleetcode",
//     返回 2.
// 注意事项：您可以假定该字符串只包含小写字母。
/**
 * @param {string} s
 * @return {number}
 */
/*方法一：自己初步写的解法，用时88ms,击败了84.15%的用户*/
var firstUniqChar = function(s) {
    let len = s.length;
    let temp = {};
    let target = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        let char = s.charAt(i);
        if (temp[char]) {
            temp[char].v++;
        } else {
            temp[char] = {v : 1, i : i};
        }
    }
    let arr = Object.entries(temp);
   for (let j = 0; j < arr.length; j++) {
       let curr = arr[j];
       if (curr[1].v === 1 && curr[1].i < target) {
           target = curr[1].i;
       }
   }
    return target === Number.MAX_SAFE_INTEGER ? -1 : target;
};
/*方法二：受评论启发，其实第二次遍历的时候遍历字符串就行了，在最前面的索引肯定是最小的 这种改进方法执行用时反而要104ms*/
var firstUniqChar2 = function (s) {
    let len = s.length;
    let temp = {};
    let target = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < len; i++) {
        let char = s.charAt(i);
        if (temp[char]) {
            temp[char]++;
        } else {
            temp[char] = 1;
        }
    }
    let j = 0;
    while (j < len) {       // 这种解法耗时更长的原因在这里，解法一最多遍历26次，而这种解法最多遍历就不止26次了
        let char = s.charAt(j);
        if (temp[char] === 1) {
            target = j;
            break;
        }
        j++;
    }
    return target === Number.MAX_SAFE_INTEGER ? -1 : target;
};
let result = firstUniqChar2("loveleetcode");
console.log(result);