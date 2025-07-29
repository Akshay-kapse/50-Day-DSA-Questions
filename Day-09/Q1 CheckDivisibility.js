// 🔸 Platform: LeetCode
// 🔸 Problem: Check if Number is Divisible by Sum + Product of Digits
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/nim-game/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 9)
// 📅 Date: 2025-07-29
// 🧑‍💻 Language: JavaScript


/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    let sum = 0;
    let product = 1;
    let original = n;

    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        product *= digit;
        n = Math.floor(n / 10);
    }
    return original % (sum + product) === 0
};
