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
  if (!tree) {
    return true;
  }
  return recurser(tree);
  // traverse the tree
}

function recurser(tree) {
  // base case is when we reach the bottom
  if (!tree.left || !tree.right) return true;

  // check if the tree is balanced
  if (isBalanced(tree.left) && isBalanced(tree.right)) {
    // recurse left
    if (!recurser(tree.left)) return false;
    if (!recurser(tree.right)) return false;
    return true;
  } else {
    return false;
  }
}

// helper function to determine whether current subtree is balanced

function isBalanced(tree) {
  if (tree.left && tree.right) {
    if (
      Math.abs(calculateHeight(tree.left) - calculateHeight(tree.right)) > 1
    ) {
      return false;
    }
  }

  if (tree.left) {
    if (calculateHeight(tree.left) > 1) {
      return false;
    }
  }

  if (tree.right) {
    if (calculateHeight(tree.right) > 1) {
      return false;
    }
  }

  return true;
}

// helper function to determine height

function calculateHeight(tree) {
  if (!tree) {
    return 0;
  }
  return 1 + Math.max(calculateHeight(tree.left), calculateHeight(tree.right));
}

const node1 = new BinaryTree(10);
const node2 = new BinaryTree(7);
const node3 = new BinaryTree(8);
const node4 = new BinaryTree(2);
const node5 = new BinaryTree(1);
const node6 = new BinaryTree(13);

node1.left = node2;
node1.right = node6;
node2.right = node3;
node2.left = node4;
node4.left = node5;

console.log(superbalanced(node1));

// console.log(isBalanced(node6));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
