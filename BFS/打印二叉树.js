// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。

let prinForcTree = function (root) {
    let result = [];
    if (root) {
        let queue = [root];
        while (queue.length > 0) {
            let currNode = queue.shift();
            if (currNode.left) {
                queue.push(currNode.left);
            }
            if (currNode.right) {
                queue.push(currNode.right);
            }
            result.push(currNode.value);
        }
    }
    return result;
};





