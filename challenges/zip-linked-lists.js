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
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }


  let p1 = l1.head;
  let p2 = l2.head;
  let cache;

  while (p2.next) {
    p1.next = p2;
    cache = p2.next;
    p2.next = p1.next;

    p1 = p2.next;
    p2 = cache;
  }

  return l1;
};


module.exports = { Node: Node, zip: zip };
