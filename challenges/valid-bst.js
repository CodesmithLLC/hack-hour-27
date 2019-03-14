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
    let curNode = this;

    if (!curNode.left && !curNode.right) {
        return true;
    }

    if (curNode.left && !curNode.left < curNode.value) {
        return false;
    } else if (curNode.right && !curNode.right > curNode.value) {
        return false;
    }


    validBST(curNode.left);
    validBST(curNode.right);
    if (validBST(curNode.left) && validBST(curNode.right)) {
        return true;
    }

}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
