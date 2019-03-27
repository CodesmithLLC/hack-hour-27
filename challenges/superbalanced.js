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
  if(!tree) return true;
  if(!tree.left && !tree.right) return 1
  if(tree.left && !tree.right) {
    if( superbalanced(tree.left) > 1 ) return false
    else return 2;
  }
  if(!tree.left && tree.right) {
    if( superbalanced(tree.right) > 1 ) return false
    else return 2;
  }
  if(tree.left && tree.right) {
    const leftCount  = superbalanced(tree.left)
    const rightCount = superbalanced(tree.right)
    if(leftCount && rightCount){
      return 1 + Math.max(leftCount,rightCount);
    } else {
      return false;
    }
  }
}

let a = new BinaryTree(5)
let b = new BinaryTree(3)
let c = new BinaryTree(6)
let d = new BinaryTree(1)
let e = new BinaryTree(4)

a.left = b;
a.right = c;
b.left = d;
d.right= e;
console.log(superbalanced(a));


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
