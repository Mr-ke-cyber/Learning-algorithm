// 给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字。
// 注意:
//     输入只包含小写英文字母。
// 输入保证合法并可以转换为原始的数字，这意味着像 "abc" 或 "zerone" 的输入是不允许的。
// 输入字符串的长度小于 50,000。
// 示例 1:
// 输入: "owoztneoer"
// 输出: "012" (zeroonetwo)
// 示例 2:
// 输入: "fviefuro"
// 输出: "45" (fourfive)
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    // zero one two three four five six seven eight nine
    let map = new Map();
    let arr = Array(10).fill(0);
    let res = "";
    let i = 0;
    while (i < s.length) {
        let curr = s.charAt(i);
        if (map.has(curr)) {
            map.set(curr, map.get(curr) + 1);
        } else {
            map.set(curr, 1);
        }
        i++;
    }
    arr[0] = map.get("z") || 0;
    arr[2] = map.get("w") || 0;
    arr[4] = map.get("u") || 0;
    arr[6] = map.get("x") || 0;
    arr[8] = map.get("g") || 0;
    arr[1] = (map.get("o") || 0) - arr[0] - arr[2] - arr[4];
    arr[3] = (map.get("h") || 0) - arr[8];
    arr[5] = (map.get("f") || 0)- arr[4];
    arr[7] = (map.get("v") || 0)- arr[5];
    arr[9] = (map.get("i") || 0)- arr[5] - arr[6] - arr[8];
    for (let i = 0; i < 10; i++) {
        let len = arr[i];
        let j = 0;
        while (j < len) {
            res += i;
            j++;
        }
    }
    return res;
};
let result = originalDigits("esnve");
console.log(result);