// 🔸 LeetCode: Kth Smallest Element in a BST
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/kth-smallest-element-in-a-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let count = 0;
    let result = -1;

    function inOrder(node) {
        if (!node) return;

        inOrder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inOrder(node.right);
    }

    inOrder(root);
    return result;
};
