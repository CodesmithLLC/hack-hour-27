/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  if (!tree.value) return false;

  if (tree.left) {
    if (tree.left.value > tree.value) return false;
    if (!validBST(tree.left)) return false;
  }

  if (tree.right) {
    if (tree.right.value > tree.value) return false;
    if (!validBST(tree.right)) return false;
  }

  return true;
}

// const node1 = new BinaryTree(10);
// const node2 = new BinaryTree(5);
// const node3 = new BinaryTree(15);
// const node4 = new BinaryTree(4);
// const node5 = new BinaryTree(7);
// const node6 = new BinaryTree(13);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;

// const node7 = new BinaryTree(20);
// const node8 = new BinaryTree(17);
// node7.right = node8;

// console.log(validBST(node1));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
