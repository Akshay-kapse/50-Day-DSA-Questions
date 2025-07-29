// 🔸 Platform: GFG
// 🔸 Problem: Kadane’s Algorithm – Max Subarray Sum
// 🔹 Difficulty: Medium
// 🔗 Link: https://practice.geeksforgeeks.org/problems/kadanes-algorithm
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 9)
// 📅 Date: 2025-07-29
// 🧑‍💻 Language: JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxSubarraySum(arr) {
        // Code here
        let sum = arr[0]
        let maxSum = arr[0]
        
        for(let i=1;i<arr.length;i++){
           
                sum = Math.max(sum + arr[i] , arr[i])
                maxSum = Math.max(sum,maxSum)
            
        }
        
        return maxSum
    }
}
