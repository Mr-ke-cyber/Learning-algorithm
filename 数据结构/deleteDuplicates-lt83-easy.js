// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
//
// 示例 1:
//
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
//
// 输入: 1->1->2->3->3
// 输出: 1->2->3
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
// 注意是有序链表
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
// 如果是无序链表呢？
var deleteDuplicates2 = function(head) {
    if (!head) {
        return head;
    }
    let curr = head;
    let temp = [head.val];
    while(curr.next) {
        let flag = false;
        while(curr.next.val && temp.includes(curr.next.val)) {
            curr.next = curr.next.next;
            flag = true;
        }
        if (!flag) {
            temp.push(curr.next.val);
            curr = curr.next;
        }
    }
    return head;
};
