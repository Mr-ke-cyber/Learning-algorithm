/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    let res = [];
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            res.push([i, j]);
        }
    }
    return res.sort((a, b) => {
        return Math.abs(a[0] - r0) + Math.abs(a[1] - c0) - Math.abs(b[0] - r0) - Math.abs(b[1] - c0);
    })
};
let result = allCellsDistOrder(2, 2, 0, 1);
console.log(result);
