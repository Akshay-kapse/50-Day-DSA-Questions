// 🔸 Platform: LeetCode
// 🔸 Problem: 1539. Kth Missing Positive Number
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/kth-missing-positive-number/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 5)
// 📅 Date: 2025-07-26
// 🧑‍💻 Language: JavaScript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let missing = []
    let current = 1
    let i = 0

    while (k > missing.length) {
        if (i < arr.length && arr[i] === current) {
            i++
        } else {
            missing.push(current)
        }
        current++
    }
    return missing[k - 1]
};
