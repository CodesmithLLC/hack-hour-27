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
  //strategy： find height of L, find height of R
  // if Math.abs(heightL - heightR)  > 1, return false. else return true
  
  //base: empty tree
  if (tree.left === null & tree.right === null) return true;

  //recurse
  return Math.abs(height(tree.left) - height(tree.right)) <= 1; 
}

function height(BST){
  function levelHeight(current){
    if (!current) return 0;
    const left = levelHeight(current.left)
    const right = levelHeight(current.right)
    return Math.max(left, right) + 1;
  }
  return levelHeight(BST);
}

// let badBST = new BinaryTree(10)
// badBST.left = new BinaryTree(3)
// badBST.left.right = new BinaryTree(4)
// badBST.right = new BinaryTree(15)
// badBST.right.left = new BinaryTree(11);
// badBST.right.left.right = new BinaryTree(12);
// badBST.right.left.right.right = new BinaryTree(13);

// let goodBST = new BinaryTree(10)
// goodBST.left = new BinaryTree(3)
// goodBST.left.right = new BinaryTree(4)
// goodBST.left.right.right = new BinaryTree(6);
// goodBST.left.right.right.right = new BinaryTree(7)
// goodBST.right = new BinaryTree(15)
// goodBST.right.left = new BinaryTree(11);
// goodBST.right.left.right = new BinaryTree(12);
// goodBST.right.left.right.right = new BinaryTree(13);


// console.log(superbalanced(badBST));
// console.log(superbalanced(goodBST));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
