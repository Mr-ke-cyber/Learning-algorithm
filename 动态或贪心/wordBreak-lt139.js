// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 说明：
// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：
// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。
// 示例 3：
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/*初步思路是用字符串s挨个去搜索字典里的单词，搜到了就从s中去掉该单词所占长度，若字典遍历结束字符串还有长度则返回false*/
/*后来发现遍历索引大于0 的时候，剩下的字串不能拼接起来，故每次只寻找索引为0的单词*/
/*需要剪枝，否则会超时*/
var wordBreak = function(s, wordDict) {
    let temp = [s];
    let strSet = new Set();  //  用set来过滤掉重复值，避免重复遍历
    let count = 0;
    if (wordDict.length === 0) return false;
    while(temp.length > 0) {
        let currStr = temp.shift();
        for (let i = 0; i < wordDict.length; i++) {
            let curr = wordDict[i];
            let len = curr.length;
            let index = currStr.indexOf(curr);   //   遍历到的单词在字符串中的索引位置
            if (index === 0) {
                let tempStr = currStr.slice(len);
                count++;
                if (!tempStr) {                //  字符串s切割结束，即存在单词拼接成功为字符串s
                    return true;
                } else if (!strSet.has(tempStr)){     //   剪枝
                    temp.push(tempStr);
                    strSet.add(tempStr);
                }
            }
        }
    }
    return false;
};
let result = wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]);
console.log(result);