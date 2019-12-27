// 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：
//
// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典中的单词。
// 说明:
//
// 如果不存在这样的转换序列，返回 0。
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

/*BFS解法一*/
// let ladderLength = function (beginWord, endWord, wordList) {
//     if (!wordList.includes(endWord)) return 0;
//     let comboDicts = {};
//     let len = beginWord.length;
//     for (let i = 0; i < wordList.length; i++) {
//         for (let r = 0; r < len; r++) {
//             let newWord = wordList[i].substring(0, r) + '*' + wordList[i].substring(r + 1, len);
//             (!comboDicts[newWord]) && (comboDicts[newWord] = []);
//             comboDicts[newWord].push(wordList[i]);
//         }
//     }
//     function visitedWord (currQueue, currVisited, othersVisited) {
//         let currNode = currQueue.shift();
//         let currWord = currNode[0];
//         let currLevel = currNode[1];
//         for (let i = 0; i < len; i++) {
//             let newWord = currWord.substring(0, i) + '*' + currWord.substring(i + 1, len);
//             if (newWord in comboDicts) {
//                 let tmpWords = comboDicts[newWord];
//                 for (let z = 0; z < tmpWords.length; z++) {
//                     if (othersVisited[tmpWords[z]] !== undefined) {
//                         return currLevel + othersVisited[tmpWords[z]];
//                     }
//                     if (currVisited[tmpWords[z]] === undefined) {
//                         currVisited[tmpWords[z]] = currLevel + 1;
//                         currQueue.push([tmpWords[z], currLevel + 1]);
//                     }
//                 }
//             }
//         }
//         return -1;
//     }
//     let queueBegin = [[beginWord, 1]];
//     let queueEnd = [[endWord, 1]];
//     let visitedBegin = {};
//     visitedBegin[beginWord] = 1;
//     let visitedEnd = {};
//     visitedEnd[endWord] = 1;
//     while (queueBegin.length > 0 && queueEnd.length > 0) {
//         let ans = visitedWord(queueBegin, visitedBegin, visitedEnd);
//         if (ans > -1) {
//             return ans;
//         }
//         ans = visitedWord(queueEnd, visitedEnd, visitedBegin);
//         if (ans > -1) {
//             return ans;
//         }
//     }
//     return 0;
// };

/*BFS解法二：*/
// let ladderLength = function (beginWord, endWord, wordList) {
//     if(!wordList.includes(endWord)) return 0;
//     let comboDicts = {};
//     let len = beginWord.length;
//     for (let i = 0; i < wordList.length; i++) {
//         for ( let r = 0; r < len; r++) {
//             let newWord = wordList[i].substring(0, r) + "*" +wordList[i].substring(r + 1, len);
//             (!comboDicts[newWord]) && (comboDicts[newWord] = []);
//             comboDicts[newWord].push(wordList[i]);
//         }
//     }
//     let queue = [[beginWord, 1]];
//     let visited = {beginWord:true};
//     while (queue.length > 0) {
//         let currNode = queue.shift();
//         let currWord = currNode[0];
//         let currLevel = currNode[1];
//         for (let i = 0; i < len; i++) {
//             let newWord = currWord.substring(0, i) + '*' + currWord.substring(i + 1, len);
//             if (newWord in comboDicts) {
//                 let tmpWords = comboDicts[newWord];
//                 for (let z = 0; z < tmpWords.length; z++) {
//                     if (tmpWords[z] === endWord) {
//                         return currLevel + 1;
//                     }
//                     if (!visited[tmpWords[z]]) {
//                         visited[tmpWords[z]] = true;
//                         queue.push([tmpWords[z], currLevel+1]);
//                     }
//                 }
//             }
//         }
//     }
//     return 0;
// };

/*最小基因变化解法一*/
// let ladderLength = function (beginWord, endWord, wordList) {
//     if (!wordList.includes(endWord)) return 0;
//     let wordListHash = {};
//     for (let i = 0; i < wordList.length; i++) {
//         wordListHash[wordList[i]] = true;
//     }
//     let genes = "abcdefghijklmnopqrstuvwxyz";
//     let level = 0;
//     let queue = [[beginWord, 1]];
//     while (queue.length > 0) {
//         let curr = queue.pop();
//         level =  curr[1];
//         if(curr[0] === endWord) {
//             return level;
//         }
//         let arrCurr = curr[0];
//         for (let i = 0; i < arrCurr.length; i++) {
//             for (let r = 0; r < genes.length; r++) {
//                 let strCurr = (arrCurr.slice(0, i)) + genes[r] + (arrCurr.slice(i + 1));
//                 if(wordListHash[strCurr]) {
//                     queue.unshift([strCurr, level + 1]);
//                     wordListHash[strCurr] = false;
//                 }
//             }
//         }
//     }
//     return 0;
// };
/*最小基因变化解法二*/
let ladderLength = function (beginWord, endWord, wordList) {
    let comboDicts = new Set(wordList);
    if(!comboDicts.has(endWord)){
        return 0;
    }
    let level = 1;
    let queue = [[beginWord, 1]];
    while (queue.length > 0) {
        let currNode = queue.pop();

    }
    return 0;
};


let result = ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]);
console.log(result);
