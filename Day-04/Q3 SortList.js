/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let temp = head;
    let arr = [];

    while (temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    arr.sort((a, b) => a - b);

    temp = head;
    let i = 0;
    while (temp !== null && i < arr.length) {
        temp.val = arr[i];
        temp = temp.next;
        i++;
    }

    return head;
};
