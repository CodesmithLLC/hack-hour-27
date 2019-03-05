/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(node, nextNode, firstIteration = true) {

	console.log(node)

  // edge case - 1 member list
  if(node.next === null) return node;

  // is this the first iteration?
  // yes - meet your new tail!
  if(firstIteration === true){
  	let tempNode = node.next;
  	let nextTempNode = node.next.next;
  	tempNode.next = node;
  	node.next = null;
  	return reverseLinkedList(tempNode, nextTempNode, false)
  }
  // recu case
  // does node.next exist?
  // yes - move the pointers ahead
  // then make the nextNode point backwards
  // recu call on the next pointers
  if(nextNode){
  	let tempNode = nextNode;
  	let nextTempNode = nextNode.next;
  	nextNode.next = node;
  	return reverseLinkedList(tempNode, nextTempNode, false)
  // base case
  // no - return the current node - you're at the new head!
  } else {
  	return node;
  }  

}



//testing

// long list
	// let aa = new Node(1);
	// let ab = new Node(2);
	// let ac = new Node(3);
	// let ad = new Node(4);
	// let ae = new Node(5);
	// let af = new Node(6);
	// let ag = new Node(7);

	// aa.next = ab
	// ab.next = ac
	// ac.next = ad
	// ad.next = ae
	// ae.next = af
	// af.next = ag

// 2 member list
	// let ba = new Node(1);
	// let bb = new Node(2);

	// ba.next = bb

// 1 member list
	// let ca = new Node(1);


// const newList = reverseLinkedList(aa);

// function traverse(node) {
// 	if(node.next === null) console.log(node.value);
// 	else {
// 		console.log(node.value);
// 		traverse(node.next);
// 	}
// }

// traverse(newList)

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
