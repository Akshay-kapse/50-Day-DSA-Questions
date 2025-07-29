// 🔸 Platform: GFG
// 🔸 Problem: Missing Number in Array
// 🔹 Difficulty: Easy
// 🔗 Link: https://practice.geeksforgeeks.org/problems/missing-number-in-array
// 🧠 Solved by: Akshay Kapse | 50-Day DSA Challenge (Day 9)
// 📅 Date: 2025-07-29
// 🧑‍💻 Language: JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    missingNumber(arr) {
        // code here
        
        let uniqueArr = [...new Set(arr)].filter(num => num > 0)
        uniqueArr.sort((a,b)=>a-b)
        
        let missing = 1
        
        for(let i=0;i<uniqueArr.length;i++){
            
            if(missing === uniqueArr[i]) missing++
            
            else if(missing < uniqueArr[i]){ 
                return missing
            }
        }
        
        return missing
    }
}
