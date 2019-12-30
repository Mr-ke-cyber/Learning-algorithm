// 利用归并的思想实现的排序方法。
// 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
//
// 将已有序的子序列合并，得到完全有序的序列
// 即先使每个子序列有序，再使子序列段间有序
//
// 若将两个有序表合并成一个有序表，称为二路归并
// 分割：
// 将数组从中点进行分割，分为左、右两个数组
// 递归分割左、右数组，直到数组长度小于2
// 归并：
// 如果需要合并，那么左右两数组已经有序了。
// 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
// 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入
// 时间复杂度：O（nlogn)）
// 空间复杂度：O（n）
/*稳定性：稳定*/

let mergeSort = function (array) {
    if (array.length < 2) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let front = array.slice(0, mid);
    let end = array.slice(mid);
    return merge(mergeSort(front),mergeSort(end));
};
let merge = function (front, end) {
    const temp = [];
    while (front.length && end.length) {
        if (front[0] < end[0]) {
            temp.push(front.shift());
        } else {
            temp.push(end.shift());
        }
    }
    while (front.length) {
        temp.push(front.shift());
    }
    while (end.length) {
        temp.push(end.shift());
    }
    return temp;
};


let result = mergeSort([3, 1, 4, 6, 9, 2, 8]);
console.log(result);





