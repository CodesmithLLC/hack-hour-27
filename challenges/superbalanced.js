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
  // determin the height of left and right
  // if difference is less 1 or less, then it's balanced

  if (!tree.left && !tree.right ) return true

  // find height
  function height(tree) {
    if (tree.value === null) return 0
    else return max(height(tree.left), height(tree.right)) + 1 
  }

  let leftHeight = height(tree.left)
  let rightHeight = height(tree.right)

  if (Math.abs(leftHeight - rightHeight) <= 1) return true
  else return false

}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
