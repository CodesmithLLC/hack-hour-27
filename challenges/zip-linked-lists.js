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
  const head = l1;
  // if (!l1) return l2;
  if (!l2) return l1;

  while (l1.next && l2.next) {
    let l1_next_temp = l1.next;
    let l2_next_temp = l2.next;
    l1.next = l2;
    l2.next = l1_next_temp;
    l1 = l1_next_temp;
    l2 = l2_next_temp;
  }

  // if (!l1.next) {
  // l1.next = l2;
  // }

  if (!l2.next) {
    l2.next = l1.next;
  }

  l1.next = l2;

  return head;
}

// let node_1_1 = new Node(11);
// let node_1_2 = new Node(12);
// let node_1_3 = new Node(13);
// let node_1_4 = new Node(14);
// let node_1_5 = new Node(15);
// let node_1_6 = new Node(16);

// node_1_1.next = node_1_2;
// node_1_2.next = node_1_3;
// node_1_3.next = node_1_4;
// node_1_4.next = node_1_5;
// node_1_5.next = node_1_6;

// let node_2_1 = new Node(21);
// let node_2_2 = new Node(22);
// let node_2_3 = new Node(23);
// let node_2_4 = new Node(24);
// let node_2_5 = new Node(25);
// let node_2_6 = new Node(26);

// node_2_1.next = node_2_2;
// node_2_2.next = node_2_3;
// node_2_3.next = node_2_4;
// node_2_4.next = node_2_5;
// node_2_5.next = node_2_6;

// console.log(zip(node_1_1));

module.exports = { Node: Node, zip: zip };
