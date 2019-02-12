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
  //move thru LL til you reach the end, to find out the length of LL (length)
  //kth to last will be length - k
  //move through LL again, but only (length - k) times, then return that value
  if (k <= 0 || k !== Math.floor(k)) return undefined;
  if (!head || !head.hasOwnProperty("value") && !head.hasOwnProperty("next")) return undefined;

  let lengthCounter = 1;
  let pointer = head;
  while (pointer.next !== null){
    pointer = pointer.next;
    lengthCounter++;
  }

  //Guard clause for invalid k
  if (k > lengthCounter) return undefined;

  let kFromLast = lengthCounter - k;
  pointer = head;
  let i = 0;
  while (i < kFromLast){ //move up until kFromLast
    pointer = pointer.next;
    i++;
  }
  return pointer.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
