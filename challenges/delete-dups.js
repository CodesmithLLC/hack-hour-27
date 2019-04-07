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

function deleteDups(head) {
  //iterate thru LL
  //create a Set for all values
  //if the value you're on is in the set, then set previous.next to curr.next
  let current = head.next;
  let previous = head;
  let seen = new Set([head.value])
  
  while (current) {
    if (seen.has(current.value)) {
      current = current.next;
      previous.next = current;
    } else {
      seen.add(current.value);
      current = current.next;
      previous = previous.next;
    }
  }
  return head;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

// let myLL = new LinkedList();
// myLL.head = new Node(2);
// myLL.head.next = new Node(2);
// myLL.head.next.next = new Node(2);
// myLL.head.next.next.next = new Node(2);

console.log(deleteDups(myLL.head))

module.exports = deleteDups;
