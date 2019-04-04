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
  // We will need to iterate through the LL
  // and keep track of what we've seen
  // and change .next vaules to remove values we've seen previously

  // our 'temp buffer'
  const ledger = new Set;

  // pointer for iteration
  let trailer;
  let pointer = head;

  // iterate through the LL
  while (pointer !== null) {
    if (ledger.has(pointer.value)) {
      if (pointer.next !== null) {
        trailer.next = trailer.next.next;
      }
    }
    ledger.add(pointer.value);
    trailer = pointer;
    pointer = pointer.next
  }

  return head;
}




module.exports = deleteDups;
