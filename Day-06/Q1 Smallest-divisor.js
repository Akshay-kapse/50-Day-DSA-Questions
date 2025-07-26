// 🔸 Platform: LeetCode
// 🔸 Problem: 1283. Find the Smallest Divisor Given a Threshold
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 5)
// 📅 Date: 2025-07-26
// 🧑‍💻 Language: JavaScript

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let left = 1
    let right = Math.max(...nums)

    function Sum(divisor) {
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += Math.ceil(nums[i] / divisor)
        }
        return sum
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let sum = Sum(mid)

        if (sum > threshold) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
};
