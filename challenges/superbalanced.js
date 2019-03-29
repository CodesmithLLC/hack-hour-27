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

function treeHeight(tree) {
  let leftHeight = 0, rightHeight = 0;
  if (tree.left) {
    leftHeight = treeHeight(tree.left);
  }
  if (tree.right) {
    rightHeight = treeHeight(tree.right);
  }

  return 1 + Math.max(leftHeight, rightHeight);
}

function superbalanced(tree) {
  let leftHeight = 0, rightHeight = 0;

  // empty trees are balanced
  if (tree.left === null && tree.right === null) return true;

  if(tree.left) {
    // left node exists
    if (superbalanced(tree.left)) {
      // left is balanced so get left height
      leftHeight = treeHeight(tree.left);
    } else {
      return false;
    }
  }

  if(tree.right) {
    // right node exists
    if (superbalanced(tree.right)) {
      // left is balanced so get left height
      rightHeight = treeHeight(tree.right);
    } else {
      return false;
    }
  }

  // now leftHeight and rightHeight are either set or 0.
  // compare diff
  return Math.abs(rightHeight - leftHeight) <= 1;

}
// let node1 = new BinaryTree(1);
// let node2 = new BinaryTree(2);
// let node3 = new BinaryTree(3);
// let node4 = new BinaryTree(4);
// let node5 = new BinaryTree(5);
// let node6 = new BinaryTree(6);
// let node7 = new BinaryTree(7);
// let node8 = new BinaryTree(8);
// let node9 = new BinaryTree(9);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;
// node4.left = node8;
// node8.left = node7;
// node7.left = node9;

// console.log("TCL: node1", JSON.stringify(node1))

// console.log(superbalanced(node1))
// console.log(treeHeight(node1))
// console.log(treeHeight(node2))
// console.log(treeHeight(node3))
// console.log(treeHeight(node4))

// superbalanced({})
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
