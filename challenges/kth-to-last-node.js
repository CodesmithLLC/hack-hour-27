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
  let total = 1;
  let current = head;
  //iterate over list to find total nodes
  while (current.next) {
    total++;
    current = current.next;
  }
  //edge cases
  if (k > total) {console.log(`there are only ${total} nodes in the list, try a different k`)}
  if (k === 0) {return "if you are looking for the last node, set k to 1"}

  //set the target index we are looking for to the total of nodes minus the kth from last
  let target = total - k;
  let i = 0;
  let kthNode = head;

  //traverse through the list until we are at the target node
  while (i < target) {
    kthNode = kthNode.next;
    i++;
  }
  return kthNode.value;
}

 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

 console.log(kthToLastNode(2, a)); 


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
