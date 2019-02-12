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
//input arguments are k - an integer that represents the position of the node we want to access and head of the list
//result will be the value of node at the given position
//strategy: 
  //check if the length of list === 0; if so, return undefined;
  //iterate through the list loop. First node is the head, last node is this.next === null. 
  //create a temp variable to hold current node and increment by one on each loop
  //on each loop check if this.next points to k. If yes, return value that is stored at this.next.value. 
  

  let current = this.head; 
  let nextNode = this.head.next; 
  if (this.head === null) {
    return undefined; 
  }
  if (nextNode !== k) {
    nextNode++; 
  } else {
    return nextNode.value; 
  }

}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
