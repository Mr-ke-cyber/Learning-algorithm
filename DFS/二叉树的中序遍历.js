// 给定一个二叉树，返回它的 中序 遍历。


// 示例:
//
//     输入: [1,null,2,3]
//    1
//     \
//      2
//      /
//      3
// 输出: [1,3,2]

// 递归方法实现：

let inorderTraversal = function (root, array = []) {
    if (root) {
        inorderTraversal(root.left, array);
        array.push(root.val);
        inorderTraversal(root.right, array);
    }
    return array;
};

/*DFS实现*/
let inorderTraversal2 = function (root) {
    const stack = [];
    const result = [];
    let   current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
};


