/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1 && !l2) return undefined;
  if (!l1) return l2;
  if (!l2) return l1;
//Approach 1: pointer alternate
//start at l1
//store l1 next in temp
// set l1 next to l2
// set l2 next to temp
// reassign "l1" to temp
/* let pointer = l1;
while (pointer) {
  let temp = pointer.next;
  l1.next = l2;
  l2.next = temp;
  pointer = temp
}
return l1; */

//Approach 2: storage arrays
//store all values into separate arrays
//combine arrays, alternating
//create new LL using combined
let vals1 = [];
let vals2 = [];
let pointer = l1;
while (pointer) {
  vals1.push(pointer.value)
  pointer = pointer.next
}
pointer = l2;
while (pointer) {
  vals2.push(pointer.value)
  pointer = pointer.next;
} 
console.log('vals1', vals1)
console.log('vals2', vals2)

//Approach 3: build new LL
// let output = new Node(l1.value);
// let pointer = l1;
// while (pointer){
// 	output.next 
// }

};


let l1 = new Node(1);
l1.next = new Node(3);
l1.next = new Node(5);
let l2 = new Node(2);
l2.next = new Node(4);
console.log(l1)

module.exports = {Node: Node, zip: zip};
