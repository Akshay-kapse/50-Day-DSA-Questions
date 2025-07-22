// 🔸 LeetCode: Diameter of Binary Tree  
// 🔹 Difficulty: Easy  
// 🔗 Link: https://leetcode.com/problems/diameter-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var diameterOfBinaryTree = function (root) {
    if (!root) return 0
    let maxdiameter = 0

    function diameter(node) {
        if (!node) return 0

        let left = diameter(node.left)
        let right = diameter(node.right)

        maxdiameter = Math.max(maxdiameter, left + right)

        return 1 + Math.max(left, right)
    }
    diameter(root)
    return maxdiameter
};
