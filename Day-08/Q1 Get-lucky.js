// 🔸 Platform: LeetCode
// 🔸 Problem: 1945. Sum of Digits of String After Convert
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 7)
// 📅 Date: 2025-07-28
// 🧑‍💻 Language: JavaScript

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        str += (s[i].charCodeAt(0) - 96).toString()
    }

    while (k-- > 0) {
        let sum = 0
        for (let i = 0; i < str.length; i++) {
            sum += Number(str[i])
        }
        str = sum.toString()
    }

    return Number(str)
};
