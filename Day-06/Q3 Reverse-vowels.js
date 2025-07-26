// 🔸 Platform: LeetCode
// 🔸 Problem: 345. Reverse Vowels of a String
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/reverse-vowels-of-a-string/
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 5)
// 📅 Date: 2025-07-26
// 🧑‍💻 Language: JavaScript

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split('')
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        while (left < right && !vowel.has(arr[left])) left++
        while (left < right && !vowel.has(arr[right])) right--
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr.join('')
};
