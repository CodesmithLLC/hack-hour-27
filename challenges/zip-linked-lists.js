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

function zip(l1, l2, index = 0) {
  let curl1 = l1;
  let curl2 = l2;
  let l1Next, l2Next;

  while(curl1.next && curl2.next) {
    l1Next = curl1.next;
    l2Next = curl2.next;

    curl2.next = l1Next;
    curl1.next = curl2;

    curl1 = l1Next;
    curl2 = l2Next;
  }
  // console.log("l1", l1)
  // console.log("l2", l2)
  return l1;
};

module.exports = {Node: Node, zip: zip};

// let one = new Node(1);
// one.next = new Node(3);
// one.next.next = new Node(5)

// let two = new Node(2);
// two.next = new Node(4);
// two.next.next = new Node(6);

// (zip(one, two))