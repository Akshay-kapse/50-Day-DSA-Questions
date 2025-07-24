// 🔸 Platform: LeetCode
// 🔸 Problem: Palindrome Linked List
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/palindrome-linked-list/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 3)
// 📅 Date: 2025-07-21
// 🧑‍💻 Language: JavaScript

var isPalindrome = function(head) {
    let slow = head, fast = head, prev, temp;

    while (fast && fast.next) {
        fast = fast.next.next;
        temp = slow;
        slow = slow.next;
        temp.next = prev;
        prev = temp;
    }

    if (fast) slow = slow.next;

    while (slow && prev && slow.val === prev.val) {
        slow = slow.next;
        prev = prev.next;
    }

    return !slow;
};
