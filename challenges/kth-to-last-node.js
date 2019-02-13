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
<<<<<<< HEAD
  if (k === 0) return 'please select another k';
  let values = [head.value];
  let nowNode = head.next;
  // loop thru linked list
  while (nowNode) {
    // push the current node value to the array of values
    values.push(nowNode.value);
    // increment the node
    nowNode = nowNode.next;
  }
  // when nowNode becomes null bc there's no next, we've reached the end of the list and the array is complete
  // access the value of the kth node by subtracting k from the length of the array and returning its value
  return values[values.length - k];
}

// console.log(kthToLastNode(3, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
=======

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
>>>>>>> 96a06fe9d073e5da10961016624df9f513c6a42a
