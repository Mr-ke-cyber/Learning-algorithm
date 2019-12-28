// 给定一个保存员工信息的数据结构，它包含了员工唯一的id，重要度 和 直系下属的id。
//
// 比如，员工1是员工2的领导，员工2是员工3的领导。他们相应的重要度为15, 10, 5。那么员工1的数据结构是[1, 15, [2]]，员工2的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5, []]。注意虽然员工3也是员工1的一个下属，但是由于并不是直系下属，因此没有体现在员工1的数据结构中。
// 现在输入一个公司的所有员工信息，以及单个员工id，返回这个员工和他所有下属的重要度之和。

// 示例 1:

// 输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
// 输出: 11
// 解释:
//     员工1自身的重要度是5，他有两个直系下属2和3，而且2和3的重要度均为3。因此员工1的总重要度是 5 + 3 + 3 = 11。
// 注意:
//
//     一个员工最多有一个直系领导，但是可以有多个直系下属
// 员工数量不超过2000。

let employeeImportance = function (employees, target) {
    let sumImportance = 0;
    let i = 0;
    let currNode = [];
    let len = employees.length;
    while (i < len) {
        if (employees[i][0] === target) {
            currNode = employees[i];
            sumImportance += employees[i][1];
        }
        i++;
    }
    if ( currNode.length === 0) return 0;
    for (let j = 0; j < currNode[2].length; j++) {
        for (let r = 0; r < employees.length; r++) {
            if (employees[r][0] === currNode[2][j]) {
                sumImportance += employees[r][1];
            }
        }
    }
    return sumImportance;
};
let result = employeeImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1);
console.log(result);
