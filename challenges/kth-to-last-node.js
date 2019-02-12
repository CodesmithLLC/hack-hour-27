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
  if(head === null)
    return;

  let ptr = head;
  let size = 0;
  while(ptr !== null){ 
    size++;
    ptr = ptr.next;
  }

  ptr = head;
  for(let i = 0; i < size; i++){
    if(i !== size-k){
      ptr = ptr.next;
    }
    else{
      return ptr.value;
    }
  }
  return;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

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