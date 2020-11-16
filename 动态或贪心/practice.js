/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) {
        return false;
    }
    let map = new Map();
    let i = 0;
    while (i < word1.length) {
        if (map.has(word1[i])) {
            map.set(word1[i], map.get(word1[i]) + 1);
        } else {
            map.set(word1[i], 1);
        }
        i++;
    }
    let j = 0, map2 = new Map();
    while (j < word2.length) {
        if (!map.has(word2[j])) {
            return false;
        }
        if (map2.has(word2[j])) {
            map2.set(word2[j], map2.get(word2[j]) + 1);
        } else {
            map2.set(word2[j], 1);
        }
        j++;
    }
    let arr1 = [], arr2 = [];
    for (let item of map.values()) {
        arr1.push(item);
    }
    for(let item of map2.values()) {
        arr2.push(item);
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};
let result = closeStrings("", "");
console.log(result, 'jkkl')
