// 翻转一棵二叉树。
// 示例：
// 输入：
//
  //      4
//      /   \
//   2     7
 // / \   / \
// 1   3 6   9
// 输出：
//
  //     4
//     /   \
//   7     2
// / \   / \
// 9  6 3   1
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return;
    }
    root.left = invertTree(root.right);
    root.right = invertTree(root.left);
    return root;
};



