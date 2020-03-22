/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (root === null) {
        return [];
    }
    let res = [];
    let queue = [[root]];
    let level = 0;
    while (queue.length) {
        let curr = queue[level];
        if (!curr || !curr.length) break;
        let index = curr.length - 1;
        res.push(curr[index].val);
        level++;
        queue[level] = [];
        while (curr.length) {
            let temp = curr.shift();
            if (temp.left) {
                queue[level].push(temp.left);
            }
            if (temp.right) {
                queue[level].push(temp.right);
            }
        }
    }
    return res;
};
// 方法二：
var rightSideView2 = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    let curLevelNode = 1;
    let nextLevelNode = 0;
    while(queue.length) {
        const node = queue.shift();
        curLevelNode--;
        if(node.left) {
            nextLevelNode++;
            queue.push(node.left)
        }
        if(node.right) {
            nextLevelNode++;
            queue.push(node.right)
        }
        if(curLevelNode === 0) {
            result.push(node.val);
            curLevelNode = nextLevelNode;
            nextLevelNode = 0
        }
    }
    return result
};



