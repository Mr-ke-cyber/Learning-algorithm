/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
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
