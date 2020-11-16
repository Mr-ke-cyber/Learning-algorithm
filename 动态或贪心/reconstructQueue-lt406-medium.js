// 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。
// 注意：
// 总人数少于1100人。
// 示例
// 输入:
//     [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
//
// 输出:
//     [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
          return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });
    let len = people.length;
    let res = new Array(len);
    for (let i = 0; i < len; i++) {
        let space = people[i][1] + 1;
        for (let j = 0; j < len; j++) {
            if (!res[j]) {
                --space;
                if (space === 0) {
                    res[j] = people[i];
                    break;
                }
            }
        }
    }
    return res;
};
let result = reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);
console.log(result, 'result')
