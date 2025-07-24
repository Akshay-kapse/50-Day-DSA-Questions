// Definition for Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * Function to delete a node without head pointer
 * @param {Node} node - The node to delete
 */
class Solution {
    deleteNode(node) {
        if (node === null || node.next === null) return;

        node.data = node.next.data;
        node.next = node.next.next;
    }
}
