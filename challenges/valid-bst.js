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

// BinaryTree.prototype.check(value) {
// 	if (this.right === null) {return true}
// 		else {
// 		if (this.left){
// 			if (this.left > this.value) {return false}
// 			else if (this.value > this.left){
// 				BinaryTree.check(this.left)
// 			}	
// 		} else {
// 			if (this.right < this.value) {return false}
// 			else if (this.value < this.right){
// 				BinaryTree.check(this.right)
// 			}	
// 		}
		
// 	} 
// }    




// function validBST(tree) {
// 	if (tree.right === null) {return true}
// 		else {
// 		if (tree.left){
// 			if (tree.left > tree.value) {return false}
// 			else if (tree.value > tree.left){
// 				BinaryTree.check(tree.left)
// 			}	
// 		} else {
// 			if (tree.right < tree.value) {return false}
// 			else if (tree.value < tree.right){
// 				BinaryTree.check(tree.right)
// 			}	
// 		}
		
// 	} 
// } 


function validBST(tree){

	if (!tree.left && !tree.right) {return true};

	if ((tree.left && tree.left.value > tree.value) || (tree.right && tree.right.value < tree.value)){
		return false;
	}
console.log(tree.right)
	if (tree.left){
		if (tree.left.value < tree.value){
			console.log('gonna recurse')
			return validBST(tree.left)
		}	
	} 

	 if (tree.right){
		if (tree.right.value > tree.value){
			console.log('gonna recurse')
			return validBST(tree.right)
		}
	}
}






module.exports = {BinaryTree: BinaryTree, validBST: validBST};




const tree1 = new BinaryTree(10)
tree1.right = new BinaryTree(18)
tree1.right.right = new BinaryTree(20)
tree1.right.right.right = new BinaryTree(28)
tree1.left = new BinaryTree(8)
tree1.left.left = new BinaryTree(7)
tree1.left.left.left = new BinaryTree(200)


console.log(validBST(tree1))




















