/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  let maxDepth = null;
  let current = {tree: tree, depth: 0}
  let nodesToVisitQueue = [];
  while (current) {
    if (current.tree.left) {
      nodesToVisitQueue.push({tree: current.tree.left, depth: current.depth++});
    }
    if (current.tree.right) {
      nodesToVisitQueue.push({tree: current.tree.right, depth: current.depth++})
    }
    // if it's a leaf node, we check if we have found an exception for balanced tree 
    if (!current.tree.left && !current.tree.right) {
      // we only care if it's a new depth
      if (!maxDepth) {
        maxDepth = current.depth;
      } else {
        if (Math.abs(maxDepth - current.depth) > 1) {
          return false;
        }
      }
    }
    current = nodesToVisitQueue.shift();
  }
  return true;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
