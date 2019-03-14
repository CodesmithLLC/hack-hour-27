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

function validBST(tree, parents = [] , left) {
    for (let parent of parents) {
        if (parent.left) {
            if (tree.value > parent.value) return false; 
        } else {
            if (tree.value < parent.value) return false;
        }
    }

    parents.push({value: tree.value, left});

    if (tree.left) {
        if (tree.left.value > tree.value) return false;
        if (!validBST(tree.left, parents.slice(), true)) return false;
    }

    if (tree.right) {
        if (tree.right.value < tree.value) return false;
        if (!validBST(tree.right, parents.slice(), false)) return false;
    }

    return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};


// const tree = new BinaryTree(8);
// tree.left = new BinaryTree(6);
// tree.right = new BinaryTree(10);
// tree.left.left = new BinaryTree(5);
// tree.left.right = new BinaryTree(9);

// console.log(validBST(tree));

// console.log(getBSTValues(tree));