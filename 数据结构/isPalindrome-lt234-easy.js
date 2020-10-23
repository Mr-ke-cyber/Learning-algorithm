// 请判断一个链表是否为回文链表。
// 示例 1:
//
// 输入: 1->2
// 输出: false
// 示例 2:
//
// 输入: 1->2->2->1
// 输出: true
// 进阶：
// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 找到一半的位置后反转，比较两部分
var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
    const reverse = (node) => {
        let pre = null;
        let curr = node;
        while (curr) {
            let temp = curr.next;
            curr.next = pre;
            pre = curr;
            curr = temp;
        }
        return pre;
    };
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = reverse(slow.next);
    fast = head;
    while(slow) {
        if (slow.val !== fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};
 let para = new ListNode(0);
 para.next = new ListNode(0);
let result = isPalindrome(para);
console.log(result, 'jj')
