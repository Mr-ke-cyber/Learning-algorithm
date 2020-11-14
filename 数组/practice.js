/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = new Map();
    let i = 0;
    while (i < arr2.length) {
        map.set(arr2[i], i);
        i++;
    }
    return arr1.sort((a, b) => {
        if (map.has(a) && map.has(b)) {
            return map.get(a) - map.get(b);
        } else if (map.has(a) || map.has(b)){
            return map.get(a) ? -1 : 1;
        }else {
            return a - b;
        }
    })
};
