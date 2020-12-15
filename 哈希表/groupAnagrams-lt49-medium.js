// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 示例:
//     输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
//     [
//         ["ate","eat","tea"],
//         ["nat","tan"],
//         ["bat"]
//     ]
// 说明：
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
// 很笨的暴力解法
var groupAnagrams = function(strs) {
    let sample = [], res = [];
    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i];
        let k = 0, tempMap = new Map();
        while (k < curr.length) {
            tempMap.set(curr[k], (tempMap.get(curr[k]) || 0) + 1);
            k++;
        }
        if (!sample.length) {
            sample.push(tempMap);
            res.push([curr]);
            continue;
        }
        let j = 0;
        while (j < sample.length) {
            if (sample[j].size !== tempMap.size) {
                if (j === sample.length - 1) {
                    sample.push(tempMap);
                    res.push([strs[i]]);
                    break;
                }
            } else {
                let flag = false;
                for (let [key, value] of tempMap) {
                    if (value !== sample[j].get(key)) {
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    if (j === sample.length - 1) {
                        sample.push(tempMap);
                        res.push([strs[i]]);
                        break;
                    }
                } else {
                    if (res[j]) {
                        res[j].push(strs[i]);
                    } else {
                        res[j] = [strs[i]];
                    }
                    break;
                }
            }
            j++;
        }
    }
    return res;
};
// 换种思路的解法
var groupAnagrams = function (strs) {
    let tempMap = new Map(), res = [];
    const generate = (word) => {
        word = word.split("");
        word.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
        return word.join("");
    };
    for (let i = 0; i < strs.length; i++) {
        let key = generate(strs[i]);
        if (tempMap.has(key)) {
            tempMap.get(key).push(strs[i]);
        } else {
            tempMap.set(key, [strs[i]]);
        }
    }
    for (let value of tempMap.values()) {
        res.push(value);
    }
    return res;
};
