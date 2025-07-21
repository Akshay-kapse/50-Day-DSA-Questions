// 🔸 GFG: Kth element in Matrix
// 🔹 Difficulty: Medium
// 🔗 Link: https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1

class Solution {
    kthSmallest(matrix, k) {
        let ans = matrix.flat().sort((a, b) => a - b);
        return ans[k - 1];
    }
}
