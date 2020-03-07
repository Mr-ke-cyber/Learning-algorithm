// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
//
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
};
/*方法二：*/
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
var mergeTwoLists2 = function(l1, l2) {
    let preHead = new ListNode(-1), prev = preHead;   // prev作指针用
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;
    return prev.next;
};
 let result = mergeTwoLists2({val:1, next:{val:2,next:{val:4,next:null}}}, {val:1,next:{val:3,next:{val:4,next:null}}});
 console.log(result);



