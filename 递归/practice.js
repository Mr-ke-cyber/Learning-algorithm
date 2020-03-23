/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set(), sum
    n += ''
    while (sum !== 1) {
        sum = 0
        for (let i = 0; i < n.length; i++) {
            sum += n[i]*n[i]
        }
        n = sum + ''
        if (set.has(sum)) return false
        set.add(sum)
    }
    return true
};
let result = isHappy(19);
console.log(result)