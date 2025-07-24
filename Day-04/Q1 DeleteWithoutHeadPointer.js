// 🔸 Platform: GeeksforGeeks
// 🔸 Problem: Delete without head pointer
// 🔹 Difficulty: Medium
// 🔗 Link: https://www.geeksforgeeks.org/delete-a-linked-list-node-at-a-given-position/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 3)
// 📅 Date: 2025-07-21
// 🧑‍💻 Language: JavaScript

function deleteNodeWithoutHeadPointer(node) {
    if (node == null || node.next == null) return;

    node.data = node.next.data;
    node.next = node.next.next;
}
