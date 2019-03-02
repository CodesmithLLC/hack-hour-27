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
  let l3 = new Node
  // let l1next
  // let l2next

  if (l1.value) {
    l3.value = l1.value
  }
  if (l2.value) {
    l3.next = l2
  }
  if (l1.next) {
    l3.next.next = l1.next
  }
  
};

// console.log(zip())
module.exports = {Node: Node, zip: zip};
