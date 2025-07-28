// 🔸 Platform: LeetCode
// 🔸 Problem: 202. Happy Number
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/happy-number/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 7)
// 📅 Date: 2025-07-28
// 🧑‍💻 Language: JavaScript

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = new Set()

    while (n !== 1 && !seen.has(n)) {
        seen.add(n)
        let sum = 0
        while (n > 0) {
            let digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        n = sum
    }

    return n === 1
};
