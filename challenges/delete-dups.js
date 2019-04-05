/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  const set = new Set();
  if (!head) return head;
  let curr = head;
  set.add(head.value);
  let prev = head;
  curr = head.next;

  while(curr) {
    if (set.has(curr.value)) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      set.add(curr.value);
      prev = prev.next;
      curr = curr.next;
    }
  }
  return head;
}

const node1 = new Node(1)
node1.next = new Node(2)
node1.next.next = new Node(3);
node1.next.next.next = new Node(3)
node1.next.next.next.next = new Node(4)
console.log("TCL: node1", JSON.stringify(node1))
deleteDups(node1)
console.log("TCL: node1", JSON.stringify(node1))


module.exports = deleteDups;
