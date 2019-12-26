// 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
//
// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典中的单词。
// 说明:
//
//     如果不存在这样的转换序列，返回 0。
// 所有单词具有相同的长度。
// 所有单词只由小写字母组成。
// 字典中不存在重复的单词。
// 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
//
// 示例 1:
//
// 输入:
//         beginWord = "hit",
//         endWord = "cog",
//         wordList = ["hot","dot","dog","lot","log","cog"]
//
// 输出: 5
//
// 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
//     返回它的长度 5。
// 示例 2:
//
// 输入:
//     beginWord = "hit"
//     endWord = "cog"
//     wordList = ["hot","dot","dog","lot","log"]
//
// 输出: 0
//
// 解释: endWord "cog" 不在字典中，所以无法进行转换。


/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLengthLt127 = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) return 0;
    let comboDicts = {};
    let len = beginWord.length;
    for (let i = 0; i < wordList.length; i++) {
        for ( let r = 0; r < len; r++) {
            let newWord = wordList[i].substring(0, r) + "*" +wordList[i].substring(r + 1, len);
            (!comboDicts[newWord]) && (comboDicts[newWord] = []);
            comboDicts[newWord].push(wordList[i]);
        }
    }
    let queue = [[beginWord, 1]];
    let visited = {beginWord:true};
    while (queue.length > 0) {
        let currNode = queue.shift();
        let currWord = currNode[0];
        let currLevel = currNode[1];
        for (let i = 0; i < len; i++) {

        }
    }
};
