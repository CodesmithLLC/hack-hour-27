/* Merge two linked lists so that their nodes alternate. 
 * Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2, head = l1) {

	// returns the head of a zipped linked list

	// edge cases - one or both nodes do not exist
	if(!l1 && !l2) return undefined;
	if(!l2) return l1;
	if(!l1) return l2;


	// base cases - one or both nodes are the tail
	if(l1.next === null && l2.next === null) {
		l1.next = l2;
		return head;
	}
	if(l1.next === null && l2.next !== null) {
		l1.next = l2;
		return head;
	}
	if(l1.next !== null && l2.next === null) {
		let tempNext = l1.next;
		l1.next = l2;
		l2.next = tempNext
		return head;
	}

	// recu case - both nodes are not the tail

	let templ1Next = l1.next;
	let templ2Next = l2.next;
	l1.next = l2;
	l2.next = templ1Next;
	return zip(templ1Next, templ2Next, head);
	
};

//testing

let aa = new Node(1);
let ab = new Node(3);
let ac = new Node(5);
let ad = new Node(7);
let ae = new Node(9);

let ba = new Node(2);
let bb = new Node(4);
let bc = new Node(6);
let bd = new Node(8);

aa.next = ab
ab.next = ac
ac.next = ad
ad.next = ae

ba.next = bb
bb.next = bc
bc.next = bd

function traverse(node) {
	if(node.next === null) console.log(node.value);
	else {
		console.log(node.value);
		traverse(node.next);
	}
}


newList = zip(aa, ba)
traverse(newList);

module.exports = {Node: Node, zip: zip};
