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
  if (!l1 && l2) return l2; // if l1 doesn't exist and l2 exists return l2
  if (l1 && !l2) return l1 // if l1 exists and l2 doesn't then return l1
  if (!l1 && !l2) return null // if none exist return null

  let ret = l1;
  let currL1 = l1;
  let nextL1 = l1.next;
  let currL2 = l2;
  let nextL2 = l2.next;


  while (currL1 && currL2) {

    // List 1 current -> list 2 current
    currL1.next = currL2;

    // if L1.next exists then List 2 current -> list 1.next
    if (nextL1) {
      currL2.next = nextL1;

      // move all pointers
      currL1 = nextL1;
      nextL1 = nextL1.next;
      currL2 = nextL2;
      if (nextL2) {
        nextL2 = nextL2.next;
      }
    } else {
      currL1 = null;
    }
  }
  // out of while loop. one or both lists are done.
  // if l1 still exists then
  if (!currL1) {

  }



  return ret;
};

module.exports = {Node: Node, zip: zip};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);

node1.next = node3;
node3.next = node5;
node5.next = node7;

node2.next = node4;
node4.next = node6;
node6.next = node8;
node8.next = node9;

console.log('TCL: node1', JSON.stringify(node1))
console.log('TCL: node2', JSON.stringify(node2))
console.log('done - ', JSON.stringify(zip(node1, node2)))
