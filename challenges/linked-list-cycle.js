/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

// roughly O(n), just might take more iterations and O(1) space
function hasCycle(head) {
  if (!head) return false;
  // a slower pointer and faster pointer to keep track of pace
  let axolotl = head;
  let shark = head;
  // slow will eventually catch up if there is a cycle
  while (shark.next) {
    // increment slow by one, fast by two
    axolotl = axolotl.next
    shark = shark.next.next;
    if (shark === axolotl) return true;
  }
  return false;
}

// O(n) space and time
function hasCycle(head) {
  const visited = new Set()
  function recurse(node){
    if (node.next === null) return false;
    if (visited.has(node)) return true;
    visited.add(node)
    return recurse(node.next);
  }
  // initialize first recurse
  return recurse(head);
}

module.exports = {Node: Node, hasCycle: hasCycle}

