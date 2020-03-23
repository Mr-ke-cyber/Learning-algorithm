/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
    let len = A.length;
    A = A.sort((a, b) => a - b);
    let res = 0;
    let i = 1;
    while (i < len) {
        if (A[i] <= A[i - 1]) {
            let n = A[i - 1] + 1 - A[i];
            A[i] += n;
            res += n;
        }
        i++;
    }
    return res;
};
let result = minIncrementForUnique([3,2,1,2,1,7]);
console.log(result);