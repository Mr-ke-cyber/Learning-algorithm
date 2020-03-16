// 给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
// 返回 s 所有可能的分割方案。
// 示例:
//     输入: "aab"
// 输出:
//     [
//         ["aa","b"],
//         ["a","a","b"]
//     ]
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let len = s.length;
    let res = [];
    let temp = [];
    const check = function (str, l, r){
        while (l < r) {
            if (str.charAt(l) !== str.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    };
    const backtracking = function (str, start, temp) {
        if (start === len) {
            res.push([...temp]);
            return;
        }
        for (let i = start; i < len; i++) {
            if (!check(str, start, i)) {
                continue;
            }
            temp.push(str.substring(start, i + 1));
            backtracking(s, i + 1, temp);
            temp.pop();
        }
    };
    backtracking(s, 0, temp);
    return res;
};
let result = partition("aabb");
console.log(result, 'jjj');