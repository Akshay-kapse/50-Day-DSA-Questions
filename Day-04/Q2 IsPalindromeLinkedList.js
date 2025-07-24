// 🔸 Platform: LeetCode
// 🔸 Problem: Palindrome Linked List
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/palindrome-linked-list/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 3)
// 📅 Date: 2025-07-21
// 🧑‍💻 Language: JavaScript

var isPalindrome = function (head) {
    let temp = head
    let arr = []

    while (temp !== null) {
        arr.push(temp.val)
        temp = temp.next
    }

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] != arr[right]) {
            return false
        }

        left++
        right--
    }
    return true
};
