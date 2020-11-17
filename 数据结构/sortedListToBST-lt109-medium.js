// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
// 示例:
//     给定的有序链表： [-10, -3, 0, 5, 9],
//     一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：
//
//        0
//       / \
//      -3   9
//     /   /
//   -10  5
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
         }
// 方法一 快慢指针
var sortedListToBST = function(head) {
    if (!head) {
        return head;
    }
    let fast = head, slow = head;
    let preslow;
    while (fast && fast.next) {
        fast = fast.next.next;
        preslow = slow;
        slow = slow.next;
    }
    const root = new TreeNode(slow.val);
    if (preslow) {
        preslow.next = null;
        root.left = sortedListToBST(head);
    }
    root.right = sortedListToBST(slow.next);
    return root;
};
// 方法二 DFS
var sortedListToBST2 = function(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    const buildTree = (start, end) => {
        if (start > end) {
            return null;
        }
        let mid = start + ((end - start) >> 1);
        const root = new TreeNode(arr[mid]);
        root.left = buildTree(start, mid - 1);
        root.right = buildTree(mid + 1, end);
        return root;
    };
    return buildTree(0, arr.length - 1);
};
