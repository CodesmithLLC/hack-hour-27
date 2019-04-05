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

function Node(val){
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  let seen = new Set();
  let curNode = head;
  seen.add(curNode.value)

  while (curNode.next) {
    if (seen.has(curNode.next.value)) {
      curNode.next = curNode.next.next
    }
    else {
      seen.add(curNode.next.value)
      curNode = curNode.next
    }
  }
  return head;
}

module.exports = deleteDups;

// let test = new Node(1);
// test.next = new Node(2);
// test.next.next = new Node(3);
// test.next.next.next = new Node(3);
// test.next.next.next.next = new Node(4);

// console.log("TCL: test", deleteDups(test))

