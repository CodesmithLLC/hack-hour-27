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
  let feeler = head;
  for (let i = 0; i < k; i++){
    feeler = feeler.next;
  }
  let pointer = head;
  console.log(pointer);
  while (feeler !== null){
    pointer = pointer.next;
    feeler = feeler.next;
  }
  return pointer.value;
}

function recursiveKth(k, head, feeler = head){
  if (k>0){
    return recursiveKth(k-1, head, feeler.next);
  }else{
    if (feeler === null){
      return head.value;
    }
    return recursiveKth(k, head.next, feeler.next);
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
