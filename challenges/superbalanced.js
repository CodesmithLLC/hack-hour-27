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

function findHeight(tree) {
  if (!tree) return 0;
  let left = findHeight(tree.left);
  let right = findHeight(tree.right);
  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}

function superbalanced(tree) {
  if (!tree) return true;
  return Math.abs(findHeight(tree.left) - findHeight(tree.right)) < 2 && superbalanced(tree.left) && superbalanced(tree.right);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};


// const myTree = new BinaryTree(6);
// myTree.left = new BinaryTree(3);
// myTree.left.right = new BinaryTree(4);
// myTree.right = new BinaryTree(8);
// myTree.left.right.right = new BinaryTree(5);

// console.log(findHeight(myTree)); // 3
// console.log(superbalanced(myTree)); // false