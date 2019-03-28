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
  let leftHeight = 0;
  let rightHeight = 0;
 
  if (tree.left !== null) {
   leftHeight = 1 + superbalanced(tree.left);
  } 
 
  if (this.right !== null) {
    rightHeight = 1 + superbalanced(tree.right);
  }
  if (leftHeight !== rightHeight) {
    let greater;
    let lesser;
    rightHeight > leftHeight ? greater = rightHeight : greater = leftHeight;
    rightHeight < leftHeight ? lesser = rightHeight : lesser = leftHeight;
    return (greater - lesser <= 1)
  }
 

  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
