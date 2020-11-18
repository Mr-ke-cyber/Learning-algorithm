/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return root;
    }
    let res = [];
    const backTrace = (node, tempPath) => {
        if (!node) {
            return;
        }
        tempPath.push(node.val);
        if (!node.left && !node.right){
            res.push(tempPath.slice());
        }
        if(node.left) {
            backTrace(node.left, tempPath);
            tempPath.pop();
        }
        if(node.right) {
            backTrace(node.right, tempPath);
            tempPath.pop();
        }
    };
    backTrace(root, []);
    res = res.map((item) => {
        return item.join("->")
    });
    console.log(res, 'kk')
    return res;
};
binaryTreePaths();
let result = binaryTreePaths({val: 1, left:{val: 2, left: null,right: {val: 5,left: null,right: null}}, right: {val: 3, left: null, right: null}});
