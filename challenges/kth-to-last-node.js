/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {

  this.value = val;
  this.next = null;

}

function kthToLastNode(k, head) {

	// count how long the list is
	const length = remainingNodes(head);
	// traverse that many nodes - k + 1
	const target = length-k+1;
	// return the value at the target node
	return getNode(target, head);

}

function remainingNodes(node, counter = 1) {

	// returns number of nodes from node, inclusive of the first
	if(node.next === null) return counter;
	else return remainingNodes(node.next, counter+1);

}

function getNode(l, node){

	// returns value of the l'th node
	if(l === 1) return node.value;
	if(node.next === null) return undefined;
	return getNode(l-1, node.next);

}

// tests

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(3, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
