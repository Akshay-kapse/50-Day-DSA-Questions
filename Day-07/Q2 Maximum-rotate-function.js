// 🔸 Platform: LeetCode
// 🔸 Problem: 396. Rotate Function
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/rotate-function/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 6)
// 📅 Date: 2025-07-27
// 🧑‍💻 Language: JavaScript


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    const n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let f = nums.reduce((acc, val, i) => acc + i * val, 0);
    let max = f;

    for (let i = 1; i < n; i++) {
        f = f + totalSum - n * nums[n - i];
        max = Math.max(max, f);
    }

    return max;
};
