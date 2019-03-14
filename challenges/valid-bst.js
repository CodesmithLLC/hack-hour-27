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
    if(this.left === null && this.right === null)
        return true;

    if(this.left === null || this.right === null)
        return false;

    // left tree
    if(tree.value > tree.left.value){
        if(!validBST(this.tree.left))
            return false;

    }else{
        return false
    }
    // right tree
    if(tree.value < tree.right.value){
        if(!validBST(this.tree.right))
            return false;
    }else{
        return false
    }

    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
