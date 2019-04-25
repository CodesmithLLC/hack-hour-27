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
    //strat: pointer start at head. At each node, check if left.value < this.value. and right.value > this.value.
    //use recursion
    //if you have a left, move to the left and do the same check.
    //if you have a right, move to the right and do the same check.
    if (this.left && this.left.value > this.value) return false;
    if (this.right && this.right.value < this.value) return false;
    if (this.left) validBST(this.left);
    if (this.right) validBST(this.right);
    return true;

    
}

BinaryTree.prototype.add = function add(value) {
    const curr = new BinaryTree(value);
    // if left exists and value is less than the current val
    if (this.left && value < this.value) { 
      this.left.add(value);
    // if right exists and value is greater than the current val
    } else if (this.right && value > this.value) { 
      this.right.add(value);
    // if left doesnt exist and val is less than the current val
    } else if (!this.left && value < this.value) { 
      this.left = curr;
    // if right doesnt exist and val is less than the current val
    } else if (!this.right && value > this.value) { 
      this.right = curr;
    }
  };

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// let myBST = new BinaryTree(5);
// myBST.add(4);
// myBST.add(9);
// myBST.add(3);
// myBST.add(2);
// myBST.add(3.5);
// myBST.add(6);
// myBST.add(8);
// myBST.right.left.left = new BinaryTree(18)
// console.log('myBST', myBST)
// console.log(validBST(myBST))

