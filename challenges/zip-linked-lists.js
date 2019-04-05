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

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let head = l1;
  let temp = l1;
  l1 = l1.next;

  while (l1 && l2) {
    temp.next = l2;
    l2 = l2.next;
    
    temp = temp.next;
    temp.next = l1;

    temp = temp.next;
    l1 = l1.next;
  }

  if (l1) {
    temp.next = l1;
  } else {
    temp.next = l2;
  }

  return head;
};

module.exports = {
  Node: Node,
  zip: zip
};

let one = new Node(1);
one.next = new Node(3);
one.next.next = new Node(5)

let two = new Node(2);
two.next = new Node(4);
two.next.next = new Node(6);

console.log(zip(one, two))