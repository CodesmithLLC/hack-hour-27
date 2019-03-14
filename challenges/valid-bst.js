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

function validBST(node) {

  // edge case - no input
  if(!node) return undefined;

  // base case - at the end of a branch
  if(!node.left && !node.right) return true;
  // recu cases

  // no pair - valid
  if(!node.left && node.right.value > node.value) return validBST(node.right);
  if(!node.right && node.left.value < node.value) return validBST(node.left);

  // no pair - invalid
  if(!node.left && node.right.value < node.value) return false;
  if(!node.right && node.left.value > node.value) return false;

  // invalid left or right
  if( (node.left.value > node.value) || (node.right.value < node.value) ) {
    return false;
  }

  // valid left and right
  return validBST(node.left) && validBST(node.right);
  
}

// testing

// let a = new BinaryTree(5)
// let b = new BinaryTree(3)
// let c = new BinaryTree(10)
// let d = new BinaryTree(1)
// let e = new BinaryTree(4)
// let f = new BinaryTree(9)
// let g = new BinaryTree(0)

// a.left = b
// a.right = c

// b.left = d
// b.right = e

// c.left = f
// d.right = g

// console.log(validBST(a))




module.exports = {BinaryTree: BinaryTree, validBST: validBST};
