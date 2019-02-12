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
  //need to determine the length of the linked list, so we loop through counting how many nodes there are
  //set variables
  let currentNodeCount = a; //keep track of node count with this variable
  let length = 1;
  let currentNode = a; //store the current node in a variable

  while(true) {
    if(currentNodeCount.next != null) {
      length++
      currentNodeCount = currentNodeCount.next //this will take us to the next node, so we can count the length
    } else {
      for(let i = 1; i < length - 1; i++) { //as we are looping through with i, we are changing the current node
        //to the next node
        currentNode = currentNode.next
      } //once the condition is no longer met, we want to return the currentNode value, which should be updated
      return currentNode.value
    }
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
