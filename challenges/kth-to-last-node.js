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
  let lead = head;
  let follow = head;
  // we are setting the lead to be k nodes in front of follow
  // we are also checking if lead exists everytime, because if it doesn't then we break out of the loop
  for (let i = 0; i < k && lead; i += 1) {
    lead = lead.next;
  }
  // iterate for both pointers through until end of linked list
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
