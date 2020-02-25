/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;
    if (sLen !== tLen) return false;
    let temp1 = Array(26).fill(0);
    let temp2 = Array(26).fill(0);
    for (let i = 0; i < sLen; i++) {
        let curr1 = s[i].charCodeAt(0) - 97;
        let curr2 = t[i].charCodeAt(0) - 97;
        temp1[curr1]++;
        temp2[curr2]++;
    }
    for (let j = 0; j < 26; j++) {
        if (temp1[j] !== temp2[j]) {
            return false;
        }
    }
    return true;
};
console.log("a".charCodeAt(0));