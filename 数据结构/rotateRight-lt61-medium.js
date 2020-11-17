// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
// 示例 1:
// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
//     向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:
// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
//     向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !k) {
        return head;
    }
    let fast = head;
    let slow = head;
    let idx = 1;
    while (fast.next) {
        idx++;
        fast = fast.next;
    }
    k = k % idx;
    if (!k) {
        return head;
    }
    let left = idx - k; // 需要右遍历left - 1个位置
    while(left > 1) {
        slow = slow.next;
        left--;
    }
    let temp = slow.next;
    slow.next = null;
    fast.next = head;
    return temp;
};
let head = {val:1, next:{val: 2, next: {val:3, next: {val: 4, next: {val: 5, next: null}}}}};
let result = rotateRight(head, 5);
console.log(result, 'result')
