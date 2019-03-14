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

  let leftValid = true;
  let rightValid = true;

  // check for left node
  if (tree.left) {
    // make sure left is less than value
    if (tree.left.value > tree.value) return false;
    // get the biggest value in left node and compare to tree
    if (maxBST(tree.left) > tree.value) return false;
    // check if left is valid
    leftValid = validBST(tree.left);
  }

  // check for right node
  if (tree.right) {
    // make sure right is bigger than value
    if (tree.right.value < tree.value) return false;
    // get the smallest value in left node and compare to tree
    if (minBST(tree.right) < tree.value) return false;
    // check if right is valid
    rightValid = validBST(tree.right);
  }

  // return both nodes valid
  return rightValid && leftValid;
}

function maxBST(tree) {
  let leftMax=0
  let rightMax = 0;

  if (tree.left) {
    // has left go left
    leftMax = maxBST(tree.left);
  }

  if (tree.right) {
    rightMax = maxBST(tree.right);
  }

  return Math.max(tree.value, leftMax, rightMax);
}

function minBST(tree) {
  let leftMin= Infinity;
  let rightMin= Infinity;

  if (tree.left) {
    // has left go left
    leftMin = minBST(tree.left);
  }

  if (tree.right) {
    rightMin = minBST(tree.right);
  }

  return Math.min(tree.value, leftMin, rightMin);
}

// const t10 = new BinaryTree(10);
// const t20 = new BinaryTree(20);
// const t5 = new BinaryTree(5);
// const t4 = new BinaryTree(4);
// const t11 = new BinaryTree(11);

// t10.left = t5;
// t10.right = t20;
// t20.left = t4;
// console.log('TCL: t10', t10);

// console.log('valid t10', validBST(t10));



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
