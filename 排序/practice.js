let insertSort = function (Array) {
    let len = Array.length;
    for (let i = 1; i < len; i++) {
        let target = i;
        for (let j = i - 1; j >= 0; j--) {
            if (Array[j] > Array[target]) {
                [Array[target], Array[j]] = [Array[j],Array[target]];
                target = j;
            }
        }
    }
    return Array;
};
let result = insertSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);