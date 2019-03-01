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
  // cases where either input is null
  if (!l1 && l2) return l1 = l2;
  if (l1 && !l2) return;

  let p1 = l1;
  let p2 = l2;
  let n1 = l1.next;
  let n2 = p2.next;
  
  while (true) {
    n1 = p1.next;
    n2 = p2.next;
    p1.next = p2;
    if (!n1) break;
    p2.next = n1;
    if (!n2) break;
    p1 = n1;
    p2 = n2;
  }

};

module.exports = {Node: Node, zip: zip};

// let a = new Node('a');
// a.next = new Node('b');
// a.next.next = new Node('c');
// console.log('a before:');
// let p = a;
// while (p) {
//   console.log(p.value);
//   p = p.next;
// }
// let b = new Node('1');
// b.next = new Node('2');
// b.next.next = new Node('3');
// console.log('b before:');
// p = b;
// while (p) {
//   console.log(p.value);
//   p = p.next;
// }
// zip(a,b);
// console.log('after:');
// p = a;
// while (p) {
//   console.log(p.value);
//   p = p.next;
// }
