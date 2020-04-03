let insertSort = function (arr) {
    let len = arr.length;
    for (let i = 1; i < len; i++) {
        let target = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[target]){
                [arr[j], arr[target]] = [arr[target], arr[j]];
                target = j;
            } else {
                break;
            }
        }
    }
    return arr;
};
let result = insertSort([2, 7, 4, 6, 9, 1, 8, 22]);
console.log(result);