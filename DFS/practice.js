/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b[1]);
    let res = 1, len = points.length, pre = points[0][1];
    if (!len) {
        return 0;
    }
    for (let i = 1; i < len; i++) {
        if (points[i][0] > pre) {
            res++;
            pre = points[i][1];
        }
    }
    return res;
};
let result = findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]);
console.log(result)
