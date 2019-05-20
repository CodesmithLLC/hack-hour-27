
function BinaryTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function heightOrUnbalanced(tree) {
  if (!tree) return 0;
  if (tree.right === null && tree.left === null) return 1;
  const left = heightOrUnbalanced(tree.left);
  const right = heightOrUnbalanced(tree.right);
  if (right === false || left === false) return false;
  if (Math.abs(left - right) > 1) return false;
  return Math.max(right, left) + 1;
}

function superbalanced(tree){
  return !!(heightOrUnbalanced(tree));
}

/*
const BST = {
  left:{
    left: {
      left: null,
      right: null
    }
  },
  right: {
    left: null,
    right: null
  }
}

console.log(superBalanced(BST));
*/
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
