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
  //the end nodes height will be 0
  function treeHeight(tree) {
    let maxHeight = 0;
    let leftHeight = 0;
    let rightHeight = 0;
  
    // base case
    if (tree.left === null && tree.right === null) return maxHeight;
  
    // update heights for left and right
    if (tree.left !== null) leftHeight = treeHeight(tree.left);
    if (tree.right !== null) rightHeight = treeHeight(tree.right);
  
    // update value for height base on what recurive call found
    if (leftHeight > maxHeight) maxHeight = leftHeight;
    if (rightHeight > maxHeight) maxHeight = rightHeight;
  
    return 1 + maxHeight;
  }
  
  function superbalanced(tree) {
    let leftHeight = 0;
    let leftBalanced = true;
  
    let rightHeight = 0;
    let rightBalanced = true;
  
    // base case
    if (tree.left === null && tree.right === null) return true;
  
    if (tree.left !== null) {
      leftHeight = treeHeight(tree.left);
      leftBalanced = superbalanced(tree.left);
    }
  
    if (tree.right !== null) {
      rightHeight = treeHeight(tree.right);
      rightBalanced = superbalanced(tree.right);
    }
  
  
    return (Math.abs(leftHeight - rightHeight) < 2) && rightBalanced && leftBalanced;
  }
  
  
  
   // *** SOLUTION *** //
  
  function height(tree) {
    if (tree === null) return 0;
    return 1 + Math.max(height(tree.left), height(tree.right));
  }
  
  function superbalanced(tree) {
    if (tree === null) return true;
    return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
  }

  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
