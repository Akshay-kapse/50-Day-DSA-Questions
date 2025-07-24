// 🔸 Platform: LeetCode
// 🔸 Problem: Sort List
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/sort-list/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 3)
// 📅 Date: 2025-07-21
// 🧑‍💻 Language: JavaScript

var sortList = function(head) {
    if (!head || !head.next) return head;

    const findMid = (head) => {
        let slow = head, fast = head.next;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };

    const merge = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        current.next = l1 || l2;
        return dummy.next;
    };

    const mid = findMid(head);
    const right = sortList(mid.next);
    mid.next = null;
    const left = sortList(head);

    return merge(left, right);
};
