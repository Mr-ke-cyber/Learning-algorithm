// 每次循环选取一个最小的数字放到前面的有序序列中。

// 时间复杂度：0（n2）
// 空间复杂度：O（1）

let selectionSort = function (array) {
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
};
let result = selectionSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);







