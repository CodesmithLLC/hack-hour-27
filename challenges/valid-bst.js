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
  let curNode = tree;
  while (curNode) {
    console.log(curNode.value);
    checkValues(curNode);
    if (curNode.left !== null) {
      curNode = curNode.left;
      checkValues(curNode);
    } else if (curNode.right !== null) {
      curNode = curNode.right;
      checkValues(curNode);
    }
  }
  return true;
}

function checkValues(node) {
  if (node.left) {
    if (node.left.value > node.value) return false;
  }
  if (node.right) {
    if (node.right.value < node.value) return false;
  }
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

let tree = new BinaryTree(10);
tree.left = new BinaryTree(5);
tree.right = new BinaryTree(20);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(8);
tree.right.left = new BinaryTree(15);
tree.right.right = new BinaryTree(25);

console.log(validBST(tree));