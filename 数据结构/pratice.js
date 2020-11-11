/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    points.sort((a, b) => {
        return (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]);
    });
    return points.slice(0, K);
};
const result = kClosest([[3, 3], [5, -1], [-2, 4]], 2);
console.log(result, 'result')
