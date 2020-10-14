// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
//
// 示例:
//     给定 1->2->3->4, 你应该返回 2->1->4->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归解法
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};
// 迭代解法
var swapPairs2 = function(head) {
   const dummyHead = new ListNode(0);
   dummyHead.next = head;
   let temp = dummyHead;
    while (temp.next && temp.next.next) {
        let a = temp.next;
        let b = temp.next.next;
        temp.next = b;
        a.next = b.next;
        b.next = a;
        temp = a;
    }
    return dummyHead.next;
};
