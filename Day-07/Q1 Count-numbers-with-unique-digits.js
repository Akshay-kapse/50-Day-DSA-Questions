// 🔸 Platform: LeetCode
// 🔸 Problem: 357. Count Numbers with Unique Digits
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/count-numbers-with-unique-digits/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 6)
// 📅 Date: 2025-07-27
// 🧑‍💻 Language: JavaScript

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 10;

    let result = 10;
    let current = 9;

    for (let i = 2; i <= n; i++) {
        current *= (10 - (i - 1));
        result += current;
    }

    return result;
};
