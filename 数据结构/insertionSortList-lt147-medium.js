// 对链表进行插入排序。
// 从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
// 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
//
// 插入排序算法：
// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
//
// 示例 1：
//
// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例 2：
//
// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5
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
var insertionSortList = function(head) {
    if(!head) {
        return head;
    }
    let preHead = head;
    let temp = preHead.next;
    preHead.next = null;
    const insert = (target, node) => {  // 将node插入target链表中
        let head = target;   // 哨兵节点
        let slow;  // 记录上一次遍历位置
        while (head) {
            if (head.val >= node.val) {
                if (slow) {
                    if (slow.val <= node.val) {   //  node的值介于链表之间
                        let temp = slow.next;
                        slow.next = node;
                        node.next = temp;
                        break;
                    }
                } else {
                    node.next = head;    //  slow并不存在，node比第一节点还要小
                    return node;
                }
            } else {
                slow = head;
                head = head.next;
                if (slow.val < node.val && !head) {  //  node的值比最后一个节点还要大
                    slow.next = node;
                }
            }
        }
        return target;
    };
    while(temp) {
        let curr = temp;
        temp = temp.next;
        curr.next = null;
        preHead = insert(preHead, curr);
    }
    return preHead;
};
let result = insertionSortList({val: 4, next: {val: 4, next: {val: 1, next: {val: 3, next: {val: 9}}}}})
console.log(result);
