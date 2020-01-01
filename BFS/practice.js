// 输入:
//     beginWord = "hit"
//     endWord = "cog"
//     wordList = ["hot","dot","dog","lot","log"]

let ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    let comDics = {};
    let len = beginWord.length;
    for (let i = 0; i < wordList.length; i++) {
        for (let r = 0; r < len; r++) {
            let word = wordList[i].substring(0, r) + "*" + wordList[i].substring(r + 1, len);
            (!comDics[word]) && (comDics[word] = []);
            comDics[word].push(wordList[i]);
        }
    }
    let level = 0;
    let queue = [[beginWord, 1]];
    let visited = {beginWord:true};
    while (queue.length > 0) {
        let currNode = queue.shift();
        let currWord = currNode[0];
        level = currNode[1];
        for (let r = 0; r < currWord.length; r++) {
            let newWord = currWord.substring(0, r) + "*" + currWord.substring(r + 1, len);
            if (newWord in comDics) {
                let tmpWords = comDics[newWord];
                for(let z = 0; z < tmpWords.length; z++) {
                    if (tmpWords[z] === endWord) return level + 1;
                    if(!visited[tmpWords[z]]){
                        visited[tmpWords[z]] = true;
                        queue.push([tmpWords[z], level + 1]);
                    }
                }
            }
        }
    }
};
let result = ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
console.log(result);





