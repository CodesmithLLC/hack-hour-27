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
    let newNode = new Node(l1.val)
    newNode.next = l2;
    let head = newNode;
    newNode = newNode.next;
    let curr1 = l1.next;
    let curr2 = l2.next;
    while (curr1 && curr2) {
      newNode.next = curr1;
      newNode = newNode.next;
      newNode.next = curr2;
      newNode = newNode.next;
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    if (curr1) newNode.next = curr1;
    if (curr2) newNode.next = curr2;
    return head;
  }

module.exports = { Node: Node, zip: zip };
