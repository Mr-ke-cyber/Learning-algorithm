//练习本专题下的算法题
let count = 0;
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let complete = true;
        for (let j = i + 1; j < array.length; j++) {
            count++;
            if ( array[i] > array[j]) {
                complete = false;
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        if (complete) break;
    }
    return array
}
let result = bubbleSort([1, 2, 4, 6, 9, 3, 8]);
console.log(result, count);
