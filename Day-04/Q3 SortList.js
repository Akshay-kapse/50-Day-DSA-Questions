// 🔸 Platform: LeetCode
// 🔸 Problem: Sort List
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/sort-list/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 3)
// 📅 Date: 2025-07-21
// 🧑‍💻 Language: JavaScript

var sortList = function (head) {
    let temp = head
    let arr = []

    while (temp != null) {
        arr.push(temp.val)
        temp = temp.next
    }

    arr.sort((a, b) => a - b)

    temp = head
    let i = 0
    while(temp != null || i < arr.length){
        temp.val = arr[i]
        temp = temp.next
        i++
    }

    return head
};
