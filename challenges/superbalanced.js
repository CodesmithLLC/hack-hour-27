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
  if (!(this.left|this.right)){
    return true;
  }
  if (this.left && this.right){
    return superbalanced(this.left)&&superbalanced(this.right);
  }
  if (!this.left){
    return !(this.right.left||this.right.right)
  }
  if (!this.right){
    return !(this.left.left||this.left.right)
  }
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
