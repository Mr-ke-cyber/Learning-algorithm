// 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
//
// 实现步骤：
//
// 选择一个基准元素target（一般选择第一个数）
// 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
// 分别对target左侧和右侧的元素进行快速排序
//
// 这也应用了分治的思想（将大问题分解成一些小问题来递归求解）

// 快速排序不稳定
// 时间复杂度：平均 O（nlogn），最坏 O（n2），实际上大多数情况下小于O（nlogn）；
// 空间复杂度：O（logn）;
/*递归写法*/
let quickSort = function (array) {
    if (array.length < 2) {
        return array;
    }
    const target = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < target) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([target], quickSort(right));
};
let result = quickSort([6, 1, 2, 7, 9, 3, 4, 5, 10, 8]);
console.log(result, 'jjj');


